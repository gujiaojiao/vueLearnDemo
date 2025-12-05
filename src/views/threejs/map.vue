<template>
  <div class="container" ref="container">
    <div class="mapWeb" ref="mapWeb"></div>
  </div>
</template>
<script setup>  
import { ref, reactive, watch, onMounted, onUnmounted, setBlockTracking } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { gsap } from 'gsap/gsap-core'
import GUI from 'three/examples/jsm/libs/lil-gui.module.min'
import borderBlue from '@/assets/images/borderBlue.png'
import borderTwo from '@/assets/images/borderTwo.png'
let scene, camera, render, cube, controls, gui, gridSystem
let mapWeb = ref(null)

const createVisualizationMap = () => {
  // 创建地板
  const createFloor = () => {
    const floorGeometry = new THREE.PlaneGeometry(100, 100)
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x192b41,
      roughness: 0.9,
      metalness: 0.1,
      transparent: true,
      opacity: 0.9
    })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = -Math.PI / 2
    floor.position.y = -5
    scene.add(floor)
    return floor
  }

  const createGridSystem = (options) => {
    const gridHelper = new THREE.GridHelper(
      options.gridSize || 100,
      options.gridDivision || 20,
      options.gridColor || 0x0066cc,
      options.gridColor || 0x003366
    )
    gridHelper.position.copy(options.position || new THREE.Vector3(0, -5, 0))
    scene.add(gridHelper)

    // 创建点阵列
    const pointsGeometry = new THREE.BufferGeometry()
    const points = []
    const layout = options.pointLayout || { row: 50, col: 50 }
    const shapeSize = options.shapeSize || 1

    for (let i = 0; i < layout.row; i++) {
      for (let j = 0; j < layout.col; j++) {
        const x = (i - layout.row / 2) * shapeSize
        const z = (j - layout.col / 2) * shapeSize
        points.push(x, 0.1, z)
      }
    }

    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3))

    // 为每个点预计算与中心点的距离
    const distances = new Float32Array(points.length / 3)
    for (let i = 0; i < points.length; i += 3) {
      const x = points[i]
      const z = points[i + 2]
      const distance = Math.sqrt(x * x + z * z)
      distances[i / 3] = distance
    }

    // 初始化颜色数组
    const colors = new Float32Array(points.length)
    const baseColor = new THREE.Color(options.pointColor || 0x2d4f73)
    for (let i = 0; i < colors.length; i += 3) {
      colors[i] = baseColor.r
      colors[i + 1] = baseColor.g
      colors[i + 2] = baseColor.b
    }
    pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const pointsMaterial = new THREE.PointsMaterial({
      size: options.pointSize || 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    })

    const pointsSystem = new THREE.Points(pointsGeometry, pointsMaterial)
    pointsSystem.position.copy(options.position || new THREE.Vector3(0, -5, 0))
    scene.add(pointsSystem)

    // 扩散变量
    let diffusionTime = 0
    const centerX = 0
    const centerZ = 0

    // 更新雷达扩散效果的函数
    const updateDiffusion = (deltaTime) => {
      if (!options.diffuse) return

      diffusionTime += deltaTime * (options.diffuseSpeed || 1)

      const colors = pointsGeometry.attributes.color.array
      const waveRadius = diffusionTime * 10 // 波的传播速度
      const waveWidth = options.diffuseWidth || 5 // 波的宽度
      const diffuseColor = new THREE.Color(options.diffuseColor || 0x00ffff)
      const baseColor = new THREE.Color(options.pointColor || 0x2d4f73)

      // 根据每个点与中心的距离更新颜色
      for (let i = 0; i < points.length; i += 3) {
        const distance = distances[i / 3]

        // 计算波动效果
        const diff = Math.abs(distance - waveRadius)
        let intensity = 0

        if (diff <= waveWidth) {
          // 创建平滑的脉冲波
          intensity = Math.max(0, 1 - diff / waveWidth)

          // 为已经被波扫过的点添加淡出效果
          const timeSinceWavePass = Math.max(0, diffusionTime - distance / 10)
          const fadeFactor = Math.max(0.2, 1 - timeSinceWavePass * 0.5)
          intensity *= fadeFactor
        }

        // 应用颜色混合
        const index = i
        const mixedColor = baseColor.clone().lerp(diffuseColor, intensity)

        colors[index] = mixedColor.r
        colors[index + 1] = mixedColor.g
        colors[index + 2] = mixedColor.b
      }

      pointsGeometry.attributes.color.needsUpdate = true
    }

    return { gridHelper, pointsSystem, updateDiffusion }
  }

  // 初始化地图元素
  const floor = createFloor()

  const gridOptions = {
    position: new THREE.Vector3(0, 0, 0),
    gridSize: 75,
    gridDivision: 20,
    gridColor: 0x2d4f73,
    shapeSize: 0.5,
    pointSize: 0.1,
    pointColor: 0x2d4f73,
    pointLayout: {
      row: 80,
      col: 80
    },
    pointBlending: THREE.AdditiveBlending,
    diffuse: true,              // 是否启用扩散效果
    diffuseSpeed: 1,            // 扩散速度
    diffuseColor: 0x00ffff,     // 扩散颜色（波峰颜色）
    diffuseWidth: 10,            // 扩散波宽度
    diffuseDir: 1
  }

  const gridSystem = createGridSystem(gridOptions)

  return { floor, gridSystem }
}


const initScence = () => {
  // 1.创建场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x192b41)
  // 2.创建相机
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 15, 10)
  camera.lookAt(0, 0, 0)
  scene.add(camera)
  // 3.创建渲染器
  render = new THREE.WebGLRenderer({ antialias: true, })
  render.setSize(window.innerWidth, window.innerHeight)
  mapWeb.value.appendChild(render.domElement)
  //添加灯光 AmbientLight, DirectionalLight
  const light = new THREE.AmbientLight(0xfaaaaa)
  scene.add(light)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight.position.set(0, 0, 1)
  scene.add(directionalLight)
  //   const geometry = new THREE.BoxGeometry(1, 1, 1)
  //   const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
  //   const mesh = new THREE.Mesh(geometry, material)
  //   scene.add(mesh)

  // 4.添加控制器
  controls = new OrbitControls(camera, render.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.25
  controls.enableZoom = true
  controls.enablePan = true
  controls.minDistance = 5
  controls.maxDistance = 20
  controls.update()
  //   中心位置添加图片贴图
  // 5.中心位置加载图片贴图 - 修复后的代码
  const textureLoader = new THREE.TextureLoader()
  textureLoader.load(borderBlue,
    // 成功回调
    (texture) => {
      // 设置纹理重复和包装模式（如果需要）
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping

      const planeGeometry = new THREE.PlaneGeometry(15, 15) // 调整大小更合适
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true, // 确保透明度
        side: THREE.DoubleSide, // 双面可见
        blending: THREE.AdditiveBlending
      })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.position.set(0, 0.2, 0) // 稍微高于地面
      plane.rotation.x = -Math.PI / 2 // 旋转使其平躺在地面上
      scene.add(plane)
      gsap.to(plane.rotation, {
        z: Math.PI * 2,
        duration: 15,
        repeat: -1,
        ease: 'linear'
      })
    },
  )
  const textureLoaderTwo = new THREE.TextureLoader()
  textureLoaderTwo.load(borderTwo,
    // 成功回调
    (texture) => {
      // 设置纹理重复和包装模式（如果需要）
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping

      const planeGeometry = new THREE.PlaneGeometry(18, 18) // 调整大小更合适
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true, // 确保透明度
        side: THREE.DoubleSide, // 双面可见
        blending: THREE.AdditiveBlending
      })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.position.set(0, 0.2, 0) // 稍微高于地面
      plane.rotation.x = -Math.PI / 2 // 旋转使其平躺在地面上
      scene.add(plane)
      // 反方向旋转
      gsap.to(plane.rotation, {
        z: -Math.PI * 2,
        duration: 15,
        repeat: -1,
        ease: 'linear'
      })
    },
  )
  // 创建GUI，并挂载到threejs场景
  try {
    gui = new GUI()
    // AmbientLight参数 颜色 强度
    const lightFolder = gui.addFolder('AmbientLight环境光')
    const lightParams = {
      color: 0xffffff,
      intensity: 1
    }
    lightFolder.add(lightParams, 'color', 0x000000, 0xffffff).onChange((value) => {
      light.color.set(value)
    }).name('环境光颜色')
    lightFolder.add(lightParams, 'intensity', 0, 1, 0.1).name('环境光强度')


  } catch (e) { }

  const loadChinaMapData = async () => {
    try {
      // 从阿里云获取中国城市边界数据
      const response = await fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
      const geojsonData = await response.json()
      geojsonData.features.forEach(feature => {
        drawProvince(feature)
      })
    } catch (error) {
      console.error('加载地图数据错误:', error)
    }
  }
  const drawProvince = (feature) => {
    const coordinates = feature.geometry.coordinates
    const provinceGroup = new THREE.Group()
    provinceGroup.renderOrder = 10; // 设置渲染顺序，确保在其他对象之上渲染

    coordinates.forEach(polygon => {
      // 处理多边形和多多边形几何体
      const polygons = Array.isArray(polygon[0][0]) ? polygon : [polygon]

      polygons.forEach(ring => {
        const points = []

        const shapePoints2D = []; // Shape需要的2D坐标数组
        ring.forEach(coord => {
          // 将经度/纬度转换为3D坐标
          // 缩放并定位以适应场景，以江苏为中心（约119°E, 33°N）
          const x = (coord[0] - 119) * 2.5
          const z = (coord[1] - 33) * 2.5
          points.push(new THREE.Vector3(x, 0.3, -z))

          shapePoints2D.push(new THREE.Vector2(x, z))
        })


        // 步骤2：闭合2D路径（Shape必需）
        if (shapePoints2D.length > 0 && !shapePoints2D[0].equals(shapePoints2D[shapePoints2D.length - 1])) {
          shapePoints2D.push(shapePoints2D[0]);
        }


        // 步骤3：用2D Shape生成几何体，再适配3D空间
        const shape = new THREE.Shape(shapePoints2D);
        // const geometry = new THREE.ShapeGeometry(shape);

        // // 关键：将几何体的2D平面（x/y）旋转为3D的x/z平面
        // geometry.rotateX(-Math.PI / 2); // 绕x轴旋转90度，让2D的y轴对应3D的z轴

        // // 步骤4：3D填充材质（保留3D特性）
        const fillMaterial = new THREE.MeshBasicMaterial({
          color: 0x273d60,
          transparent: false,
          opacity: 1,
          side: THREE.DoubleSide,
          depthTest: false // 避免3D层级遮挡
        });
        const extrudeSettings = {
          depth: 0.4, // 3D厚度（y轴方向）
          bevelEnabled: false
        };
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
        geometry.rotateX(-Math.PI / 2); // 旋转到3D地面平面
        const fillMesh = new THREE.Mesh(geometry, fillMaterial);
        fillMesh.position.y = 0.2; // 3D高度（和points3D的y一致）
        provinceGroup.add(fillMesh);


        // 绘制边界线
        const borderGeometry = new THREE.BufferGeometry().setFromPoints(points)
        const borderMaterial = new THREE.LineBasicMaterial({
          color: 0xffffff,
          linewidth: 1
        })
        const borderLine = new THREE.Line(borderGeometry, borderMaterial)
        provinceGroup.add(borderLine)
      })
    })

    scene.add(provinceGroup)
  }

  loadChinaMapData()
  const { floor, gridSystem: createdGridSystem } = createVisualizationMap()
  gridSystem = createdGridSystem

  let lastTime = performance.now()
  function renderScene(currentTime) {
    requestAnimationFrame(renderScene)
    const deltaTime = (currentTime - lastTime) / 1000
    lastTime = currentTime

    // 更新扩散效果
    // if (gridSystem && gridSystem.updateDiffusion) {
    //   gridSystem.updateDiffusion(deltaTime)
    // }

    render.render(scene, camera)
  }
  renderScene()
}

onMounted(() => {
  initScence()
})
 </script>
<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  .mapWeb {
    width: 100%;
    height: 100%;
  }
}
</style>