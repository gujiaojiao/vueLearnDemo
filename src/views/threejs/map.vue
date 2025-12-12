<template>
  <div class="container" ref="container">
    <div class="mapWeb" ref="mapWeb"></div>
  </div>
</template>
<script setup>
import {
  ref,
  reactive,
  watch,
  onMounted,
  onUnmounted,
  setBlockTracking,
} from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { gsap } from 'gsap/gsap-core'
import GUI from 'three/examples/jsm/libs/lil-gui.module.min'
import * as d3 from 'd3'
import * as topojson from 'topojson-client' // 顶部导入
import GeoJsonGeometry from 'three-geojson-geometry'
import borderBlue from '@/assets/images/borderBlue.png'
import borderTwo from '@/assets/images/borderTwo.png'
// 导入新的JSON数据文件
import areaLevelData from './areaLevel.json'
import mapData from './mapData.json'
let provinceLabels = new Map() // 存储所有省份标签
let mapGroup = null // 地图组（供射线检测用
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
      opacity: 0.9,
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
      options.gridColor || 0x003366,
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

    pointsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(points, 3),
    )

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
      blending: THREE.AdditiveBlending,
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
      col: 80,
    },
    pointBlending: THREE.AdditiveBlending,
    diffuse: true, // 是否启用扩散效果
    diffuseSpeed: 1, // 扩散速度
    diffuseColor: 0x00ffff, // 扩散颜色（波峰颜色）
    diffuseWidth: 10, // 扩散波宽度
    diffuseDir: 1,
  }

  const gridSystem = createGridSystem(gridOptions)

  return { floor, gridSystem }
}

// 创建省份文字标签（Sprite实现，始终面向相机）
const createProvinceLabel = (name, position, mapGroup) => {
  // 1. 创建文字画布纹理
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 256
  canvas.height = 64

  // 基础样式（默认态）
  const drawText = (isHover) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // 背景（半透明圆角）
    ctx.fillStyle = 'rgba(13, 22, 129, 0.3)'
    ctx.roundRect(5, 5, canvas.width - 10, canvas.height - 10, 5)
    ctx.fill()

    // 文字
    ctx.font = `bold ${isHover ? 30 : 28}px Microsoft Yahei`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillStyle = '#ffffff'
    ctx.fillText(name, canvas.width / 2, canvas.height / 2)
  }

  // 初始绘制
  drawText(false)

  // 2. 创建纹理和精灵材质
  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false, // 避免文字被地图遮挡
  })

  // 3. 创建精灵（始终面向相机）
  const sprite = new THREE.Sprite(material)
  sprite.name = `label_${name}`
  // 位置：省份中心上方（悬浮高度）
  sprite.position.set(position.x, position.y + 2.2, position.z)
  // 缩放（适配画布尺寸）
  sprite.scale.set(2.5, 0.6, 1)
  mapGroup.add(sprite)

  // 4. 暴露更新方法（用于悬浮切换样式）
  return {
    sprite,
    updateHover: (isHover) => {
      drawText(isHover)
      texture.needsUpdate = true // 更新纹理
      // 悬浮时轻微放大
      gsap.to(sprite.scale, {
        x: isHover ? 2.8 : 2.5,
        y: isHover ? 0.68 : 0.6,
        duration: 0.2,
        ease: 'power1.out',
      })
      // 悬浮时轻微上移
      gsap.to(sprite.position, {
        y: isHover ? position.y + 0.9 : position.y + 0.8,
        duration: 0.2,
        ease: 'power1.out',
      })
    },
  }
}
// 创建市文字标签
const createCityLabel = (name, position, mapGroup) => {
  // 1. 创建文字画布纹理
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 160
  canvas.height = 80

  // 绘制文字
  const drawText = (isHover) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    // // 背景（半透明圆角）
    // ctx.fillStyle = 'rgba(13, 22, 29, 0.1)'
    // ctx.roundRect(1, 1, canvas.width - 10, canvas.height - 10, 5)
    // ctx.fill()

    // 设置文字样式 - 带发光效果
    ctx.font = `bold ${isHover ? 30 : 30}px Arial`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // 创建文字发光效果
    // ctx.shadowColor = '#69e2f2'  // 发光颜色(蓝绿色)
    // ctx.shadowBlur = 1 // 发光模糊度
    ctx.fillStyle = '#ffffff'  // 文字颜色(白色)

    // 绘制文字
    ctx.fillText(name, canvas.width / 2, canvas.height / 2)
  }

  // 初始绘制
  drawText(false)
  // 创建纹理和材质
  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false
  })

  // 创建精灵对象
  const sprite = new THREE.Sprite(material)
  sprite.position.set(position.x, position.y, position.z)
  sprite.scale.set(2, 0.5, 1)
  mapGroup.add(sprite)

  // 返回更新方法
  return {
    sprite,
    updateHover: (isHover) => {
      drawText(isHover)
      texture.needsUpdate = true
    }
  }
}


// ===== 替换原柱状图代码：创建“发光科技柱” =====
const createGlowBar = (cityCenter, cityName, barHeight) => {
  const barRadius = 0.1 // 柱体半径（对应CylinderGeometry的顶部/底部半径）
  const height = barHeight

  // 1. 基础柱体（半透明渐变+自发光）
  const cylinderGeo = new THREE.CylinderGeometry(
    barRadius,
    barRadius,
    height,
    15,
  )
  // 用MeshBasicMaterial+顶点颜色实现渐变（底部暗、顶部亮）
  const colors = new Float32Array(cylinderGeo.attributes.position.count * 3)
  for (let i = 0; i < cylinderGeo.attributes.position.count; i++) {
    // 根据y坐标（柱体高度）设置颜色渐变
    const y = cylinderGeo.attributes.position.getY(i)
    const ratio = (y + height / 2) / height // 0~1（底部到顶部）
    // 底部：深科技蓝，顶部：浅亮蓝
    const baseColor = new THREE.Color(0x0a3d62)
    const topColor = new THREE.Color(0xb2feff)
    const mixedColor = baseColor.lerp(topColor, ratio)
    colors[i * 3] = mixedColor.r
    colors[i * 3 + 1] = mixedColor.g
    colors[i * 3 + 2] = mixedColor.b
  }
  cylinderGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  // 基础材质（半透明+顶点颜色+自发光）
  const cylinderMat = new THREE.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending, // 叠加发光
  })
  const cylinderMesh = new THREE.Mesh(cylinderGeo, cylinderMat)
  cylinderMesh.position.set(
    cityCenter.x,
    cityCenter.y + height / 2,
    cityCenter.z,
  )
  mapGroup.add(cylinderMesh)

  // 2. 外层辉光（核心发光效果）
  const glowGeo = new THREE.CylinderGeometry(
    barRadius + 0.05,
    barRadius + 0.05,
    height + 0.1,
    15,
  )
  const glowMat = new THREE.ShaderMaterial({
    uniforms: {
      glowColor: { value: new THREE.Color(0x69e2f2) },
      opacity: { value: 0.5 },
    },
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform float opacity;
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
        gl_FragColor = vec4(glowColor, opacity * intensity);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false, // 不写入深度，避免遮挡基础柱体
  })
  const glowMesh = new THREE.Mesh(glowGeo, glowMat)
  glowMesh.position.set(cityCenter.x, cityCenter.y + height / 2, cityCenter.z)
  mapGroup.add(glowMesh)

  // 3. 底部发光底座（匹配示例中的“光柱底座”）
  const baseGeo = new THREE.RingGeometry(
    barRadius + 0.1,
    barRadius + 0.15,
    30,
    1,
  )
  baseGeo.rotateX(-Math.PI / 2) // 平躺
  const baseMat = new THREE.MeshBasicMaterial({
    color: 0x69e2f2,
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending,
  })
  const baseMesh = new THREE.Mesh(baseGeo, baseMat)
  baseMesh.position.set(cityCenter.x, cityCenter.y + 0.05, cityCenter.z) // 柱体底部下方
  mapGroup.add(baseMesh)

  // 4.顶部市名标签

  // // 4. 顶部光环（匹配示例中的“数值底座”）
  // const topRingGeo = new THREE.RingGeometry(barRadius, barRadius + 0.1, 15);
  // topRingGeo.rotateX(-Math.PI / 2);
  // const topRingMat = new THREE.MeshBasicMaterial({
  //   color: 0xb2feff,
  //   transparent: true,
  //   opacity: 0.8,
  //   blending: THREE.AdditiveBlending
  // });
  // const topRingMesh = new THREE.Mesh(topRingGeo, topRingMat);
  // topRingMesh.position.set(cityCenter.x, cityCenter.y + height + 0.05, cityCenter.z); // 柱体顶部上方
  // mapGroup.add(topRingMesh);

  const textLabel = createCityLabel(
    cityName, // 显示市名，也可替换为数值（比如barHeight.toFixed(0)）
    { x: cityCenter.x + 0.2, y: cityCenter.y + height + 1, z: cityCenter.z }, // 文字在柱体顶部上方0.2处
    mapGroup,
  )
  // 调整文字标签样式，匹配科技感
  textLabel.sprite.scale.set(1, 0.5, 1) // 缩小标签，更精致
  textLabel.updateHover(true)

  return { cylinderMesh, glowMesh }
}
// 计算GeoJSON特征的几何中心（兼容MultiPolygon/Polygon）
const getFeatureCenter = (feature, projection) => {
  if (!feature?.geometry) return new THREE.Vector3(0, 0, 0)

  // 提取所有坐标点
  let allPoints = []
  const coordinates =
    feature.geometry.type === 'MultiPolygon'
      ? feature.geometry.coordinates.flat(2)
      : feature.geometry.coordinates.flat(1)

  // 经纬度转投影坐标
  coordinates.forEach(([lng, lat]) => {
    const [x, y] = projection([lng, lat])
    allPoints.push({ x, y })
  })

  // 计算中心
  if (allPoints.length === 0) return new THREE.Vector3(0, 0, 0)
  const xAvg = allPoints.reduce((sum, p) => sum + p.x, 0) / allPoints.length
  const yAvg = allPoints.reduce((sum, p) => sum + p.y, 0) / allPoints.length

  return new THREE.Vector3(xAvg, 0, yAvg) // y=0（后续叠加高度）
}

// 创建地图
const createMap = () => {
  // 替代原有mapData导入，直接用阿里全国TopoJSON（无需本地文件
  const drawChinaMapWithJiangsuCenter = async () => {
    try {
      // 1. 加载全国GeoJSON（完整中国数据）
      const res = await fetch(
        'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
      )
      const chinaGeoJson = await res.json()
      // 江苏市级数据（13市边界）
      const resJiangsuCity = await fetch(
        'https://geo.datav.aliyun.com/areas_v3/bound/320000_full.json',
      )
      const jiangsuCityGeoJson = await resJiangsuCity.json()
      if (!chinaGeoJson?.features || !jiangsuCityGeoJson?.features) return

      // 2. 清除旧地图+创建地图组
      const oldGroup = scene.getObjectByName('provinceGroup')
      if (oldGroup) scene.remove(oldGroup)

      mapGroup = new THREE.Group()
      mapGroup.name = 'provinceGroup'
      mapGroup.position.set(0, 0, 0) // 悬浮在地面上方
      // mapGroup.renderOrder = 1;
      scene.add(mapGroup)

      // 3. 关键：D3投影配置（完整中国+江苏居中）
      const jiangsuCenter = [119.84, 32.98] // 江苏地理中心
      const projection = d3
        .geoMercator()
        .center(jiangsuCenter) // 以江苏为中心
        .scale(130) // 缩放
        .translate([2, 0]) // 平移到原点

      // 定义样式常量（科技蓝明亮风）
      const STYLE = {
        // 其他省份样式（基础暗蓝）
        normal: {
          color: 0x223857,
          height: 0.2,
          borderColor: 0x2d4c78,
          opacity: 1,
        },
        // 江苏省突出样式（科技蓝+加高）
        jiangsu: {
          color: 0x68b6fe,
          // highlightColor: 0x47E5FF,// 高光色
          height: 0.5,
          borderColor: 0x68b6fe,
          opacity: 1,
        },
        jiangsuCity: {
          borderColor: 0xffffff,
          linewidth: 1.5,
          heightOffset: 0.72,
        },
      }

      // ===== 清空外层的provinceLabels（避免重复）=====
      provinceLabels.clear()
      // 4. 遍历所有省份，逐面渲染（避免变形）
      let renderCount = 0
      chinaGeoJson.features.forEach((feature) => {
        if (!feature?.geometry) return
        const name = feature.properties?.name || '未知区域'
        const isJiangsu = name === '江苏省'
        // 计算省份中心
        const center = getFeatureCenter(feature, projection)
        // 调整中心高度（江苏更高）
        center.y = isJiangsu ? 0.7 : STYLE.normal.height
        // 创建文字标签
        const label = createProvinceLabel(name, center, mapGroup)
        provinceLabels.set(name, label)
        // 提取GeoJSON中的经纬度坐标（多面/单面对象兼容）
        const coordinates =
          feature.geometry.type === 'MultiPolygon'
            ? feature.geometry.coordinates.flat(1)
            : feature.geometry.coordinates

        coordinates.forEach((ring) => {
          // 经纬度转Three.js坐标（用D3投影）
          const points = ring.map(([lng, lat]) => {
            const [x, y] = projection([lng, lat])
            return new THREE.Vector2(x, y) // 转2D Vector
          })

          if (points.length < 3) return

          // 创建Shape几何体（原生Three.js，避免变形）
          const shape = new THREE.Shape(points)
          // 核心：江苏用ExtrudeGeometry（带厚度），其他用ShapeGeometry
          let geom
          if (isJiangsu) {
            // 江苏：拉伸几何体（带厚度，实现加高效果）
            geom = new THREE.ExtrudeGeometry(shape, {
              depth: STYLE.jiangsu.height, // 厚度=加高高度
              bevelEnabled: true, // 倒角（更圆润的边缘，科技感）
              bevelThickness: 0.1, // 倒角厚度
              bevelSize: 0.05, // 倒角尺寸
            })
          } else {
            // 其他省份：基础平面几何体
            geom = new THREE.ShapeGeometry(shape)
          }

          // 旋转适配坐标系（保持平躺）
          geom.rotateX(Math.PI / 2)

          // 材质配置（科技蓝明亮风）
          let material
          if (isJiangsu) {
            material = new THREE.MeshLambertMaterial({
              color: STYLE.jiangsu.color,
              // specular: STYLE.jiangsu.highlightColor, // 高光色
              // shininess: 80,                          // 光泽度（明亮）
              // side: THREE.DoubleSide,
              opacity: 0.8,
              transparent: false,
            })
          } else {
            // 其他省份：基础暗蓝材质
            material = new THREE.MeshLambertMaterial({
              color: STYLE.normal.color,
              side: THREE.DoubleSide,
              transparent: false,
            })
          }
          // 创建Mesh并设置位置
          const mesh = new THREE.Mesh(geom, material)
          // 江苏的高度已由ExtrudeGeometry的depth实现，无需额外y偏移
          // 其他省份保留基础y偏移
          mesh.position.y = isJiangsu ? 0.7 : STYLE.normal.height
          mesh.userData = { province: name }
          mapGroup.add(mesh)
          renderCount++
          if (!isJiangsu) {
            const borderGeom = new THREE.EdgesGeometry(geom)
            const borderMaterial = new THREE.LineBasicMaterial({
              color: isJiangsu
                ? STYLE.jiangsu.borderColor
                : STYLE.normal.borderColor,
              linewidth: 1,
              transparent: false,
            })
            const borderLine = new THREE.LineSegments(
              borderGeom,
              borderMaterial,
            )
            borderLine.position.y = isJiangsu ? 0.7 : STYLE.normal.height + 0.01
            mapGroup.add(borderLine)
          }
        })
      })

      // 6.渲染江苏13市边界（加辅助点调试）
      jiangsuCityGeoJson.features.forEach((cityFeature) => {
        if (!cityFeature?.geometry) return
        const cityName = cityFeature.properties?.name || '未知城市'
        const barHeight = Math.random() * 3 + 1 //不同城市设置随机高度
        // 修复1：统一坐标结构（不管MultiPolygon/Polygon）
        const polygonList =
          cityFeature.geometry.type === 'MultiPolygon'
            ? cityFeature.geometry.coordinates
            : [cityFeature.geometry.coordinates]

        polygonList.forEach((polygon) => {
          const ring = polygon[0]
          if (!Array.isArray(ring) || ring.length < 4) return

          // 计算市级中心（用于放置柱状图）
          const cityCenter = getFeatureCenter(cityFeature, projection)
          cityCenter.y = 0.8 // 柱状图底部高度（和市级边界平齐）

          // 修复3：解析坐标时加类型校验，避免解构单个数值
          const linePoints = ring
            .map((point) => {
              // 核心：判断是否是[lng, lat]数组（长度为2的数组）
              if (!Array.isArray(point) || point.length !== 2) {
                console.warn('无效坐标点：', point) // 打印无效点，方便排查
                return null
              }
              const [lng, lat] = point // 现在解构的是数组，不会报错！
              const [x, y] = projection([lng, lat])
              return new THREE.Vector3(x, 0.8, y)
            })
            .filter((p) => p !== null) // 过滤无效点

          // 修复4：确保有有效点再渲染
          if (linePoints.length < 4) return
          createGlowBar(cityCenter, cityName, barHeight)
          // // ===== 创建3D柱状图核心逻辑（无数据依赖版）=====
          // // 1. 柱状图主体
          // const barGeometry = new THREE.CylinderGeometry(0.1, 0.1, barHeight, 15);
          // const barMaterial = new THREE.MeshLambertMaterial({
          //   color: 0xb2feff,
          //   emissive: 0x69e2f2,
          //   emissiveIntensity: 0.8
          // });
          // const barMesh = new THREE.Mesh(barGeometry, barMaterial);
          // barMesh.position.set(cityCenter.x, cityCenter.y + barHeight / 2, cityCenter.z);
          // mapGroup.add(barMesh);

          // // 2. 顶部发光点（粒子特效）
          // const pointGeometry = new THREE.SphereGeometry(0.08, 16, 16);
          // const pointMaterial = new THREE.MeshBasicMaterial({
          //   color: 0xffffff,
          //   transparent: true,
          //   opacity: 0.8,
          //   blending: THREE.AdditiveBlending
          // });
          // const pointMesh = new THREE.Mesh(pointGeometry, pointMaterial);
          // pointMesh.position.set(cityCenter.x, cityCenter.y + barHeight + 0.1, cityCenter.z);
          // mapGroup.add(pointMesh);
          // // 呼吸动画
          // gsap.to(pointMesh.scale, {
          //   x: 1.5, y: 1.5, z: 1.5,
          //   duration: 1.5,
          //   repeat: -1,
          //   yoyo: true,
          //   ease: 'power1.inOut'
          // });

          // // 3. 顶部显示市名（替代数值，也可后续改数值）
          // const cityLabel = createProvinceLabel(
          //   cityName, // 显示市名，而非数值
          //   { x: cityCenter.x, y: cityCenter.y + barHeight + 0.3, z: cityCenter.z },
          //   mapGroup
          // );
          // cityLabel.sprite.scale.set(1, 0.5, 1);
          // cityLabel.updateHover(true);
          // // ==============================================

          const lineGeom = new THREE.BufferGeometry().setFromPoints(linePoints)
          const line = new THREE.LineSegments(
            lineGeom,
            new THREE.LineBasicMaterial({
              color: 0xffffff,
              linewidth: 2,
              depthTest: false,
            }),
          )
          line.renderOrder = 999
          mapGroup.add(line)
        })
      })
    } catch (error) {
      console.error('渲染错误:', error)
    }
  }

  // 调用渲染
  const loadChinaMap = drawChinaMapWithJiangsuCenter()
  return { loadChinaMap }
}
const initScence = () => {
  // 1.创建场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x192b41)
  // 2.创建相机
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000,
  )
  camera.position.set(4, 10, 11)
  camera.lookAt(0, 0, 0)
  scene.add(camera)
  // 3.创建渲染器
  render = new THREE.WebGLRenderer({ antialias: true })
  render.setSize(window.innerWidth, window.innerHeight)
  mapWeb.value.appendChild(render.domElement)
  //添加灯光 AmbientLight, DirectionalLight
  const light = new THREE.AmbientLight(0xfaaaaa)
  scene.add(light)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(0, 0, 1)
  scene.add(directionalLight)

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
  textureLoader.load(
    borderBlue,
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
        blending: THREE.AdditiveBlending,
      })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.position.set(1, 0.5, -2) // 稍微高于地面
      plane.rotation.x = -Math.PI / 2 // 旋转使其平躺在地面上
      scene.add(plane)
      gsap.to(plane.rotation, {
        z: Math.PI * 2,
        duration: 45,
        repeat: -1,
        ease: 'linear',
      })
    },
  )
  const textureLoaderTwo = new THREE.TextureLoader()
  textureLoaderTwo.load(
    borderTwo,
    // 成功回调
    (texture) => {
      // 设置纹理重复和包装模式（如果需要）
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping

      const planeGeometry = new THREE.PlaneGeometry(20, 20) // 调整大小更合适
      const planeMaterial = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true, // 确保透明度
        side: THREE.DoubleSide, // 双面可见
        blending: THREE.AdditiveBlending,
      })
      const plane = new THREE.Mesh(planeGeometry, planeMaterial)
      plane.position.set(1, 0.5, -2) // 稍微高于地面
      plane.rotation.x = -Math.PI / 2 // 旋转使其平躺在地面上
      scene.add(plane)
      // 反方向旋转
      gsap.to(plane.rotation, {
        z: -Math.PI * 2,
        duration: 35,
        repeat: -1,
        ease: 'linear',
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
      intensity: 1,
    }
    lightFolder
      .add(lightParams, 'color', 0x000000, 0xffffff)
      .onChange((value) => {
        light.color.set(value)
      })
      .name('环境光颜色')
    lightFolder.add(lightParams, 'intensity', 0, 1, 0.1).name('环境光强度')

    // 直射光
    const dirLightFolder = gui.addFolder('DirectionalLight直射光')
    const lightParams2 = {
      color: 0xffffff,
      intensity: 1,
      x: 0,
      y: 0,
      z: 0,
    }
    dirLightFolder.add(lightParams2, 'color', 0x000000, 0xffffff)
      .onChange((value) => {
        directionalLight.color.set(value)
      })
      .name('直射光颜色')
    dirLightFolder.add(lightParams2, 'intensity', 0, 1, 0.1).name('直射光强度')
    dirLightFolder.add(lightParams2, 'x', -10, 10, 1).name('直射光x轴位置')

  } catch (e) { }

  // const loadChinaMapData = async () => {
  //   try {
  //     // 从阿里云获取中国城市边界数据
  //     const response = await fetch(
  //       'https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json',
  //     )
  //     const geojsonData = await response.json()
  //     geojsonData.features.forEach((feature) => {
  //       drawProvince(feature)
  //     })
  //   } catch (error) {
  //     console.error('加载地图数据错误:', error)
  //   }
  // }
  // const drawProvince = (feature) => {
  //   const coordinates = feature.geometry.coordinates;
  //   const provinceGroup = new THREE.Group();
  //   // scene.add(provinceGroup); // 先添加到场景，确保基础显示

  //   coordinates.forEach((polygon) => {
  //     const rings = Array.isArray(polygon[0][0]) ? polygon : [polygon];
  //     rings.forEach((ring) => {
  //       // 1. 收集原始经纬度转换的坐标（x对应经度，z对应纬度，y为0）
  //       const flatPoints = [];
  //       ring.forEach((coord) => {
  //         const x = (coord[0] - 119) * 2.5;
  //         const z = (coord[1] - 33) * 2.5;
  //         flatPoints.push(new THREE.Vector3(x, 0, z)); // y=0，保持平面
  //       });

  //       // 2. 填充面：旋转后贴合地面，高度0.2
  //       const shape = new THREE.Shape(flatPoints.map(p => new THREE.Vector2(p.x, p.z)));
  //       const fillGeometry = new THREE.ShapeGeometry(shape);
  //       fillGeometry.rotateX(-Math.PI / 2);
  //       const fillMesh = new THREE.Mesh(fillGeometry, new THREE.MeshBasicMaterial({
  //         color: 0x273d60,
  //         side: THREE.DoubleSide
  //       }));
  //       fillMesh.position.y = 0.2;
  //       provinceGroup.add(fillMesh);

  //       // 3. 线框：基于旋转后的平面坐标，仅在y方向抬高0.01（贴近填充面）
  //       const borderPoints = flatPoints.map(p => {
  //         // 旋转后，原z轴映射到视觉上的"y方向"，需转换为旋转后的平面坐标
  //         return new THREE.Vector3(p.x, 0.2 + 0.01, -p.z); // -p.z抵消旋转带来的方向反转
  //       });
  //       const borderLine = new THREE.LineLoop(
  //         new THREE.BufferGeometry().setFromPoints(borderPoints),
  //         new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
  //       );
  //       provinceGroup.add(borderLine);
  //     });
  //   });
  //   scene.add(provinceGroup);
  // }

  // loadChinaMapData()

  const { floor, gridSystem: createdGridSystem } = createVisualizationMap()
  gridSystem = createdGridSystem
  createMap()

  // ===== 新增：鼠标悬浮交互（使用外层的mapGroup和provinceLabels）=====
  const raycaster = new THREE.Raycaster()
  const mouse = new THREE.Vector2()
  let hoveredProvince = null

  // 鼠标坐标转换
  const onMouseMove = (event) => {
    // 若地图组还没加载，直接返回
    if (!mapGroup) return

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

    // 更新射线
    raycaster.setFromCamera(mouse, camera)

    // 检测地图组内的Mesh（过滤非Mesh对象，比如Line、Sprite）
    const meshList = mapGroup.children.filter((obj) => obj.isMesh)
    const intersects = raycaster.intersectObjects(meshList)

    // 清除上一个悬浮状态
    if (
      hoveredProvince &&
      (!intersects.length ||
        intersects[0].object.userData.province !== hoveredProvince)
    ) {
      provinceLabels.get(hoveredProvince)?.updateHover(false)
      hoveredProvince = null
    }

    // 设置新悬浮状态
    if (intersects.length) {
      const provinceName = intersects[0].object.userData.province
      if (provinceName && provinceName !== hoveredProvince) {
        hoveredProvince = provinceName
        provinceLabels.get(provinceName)?.updateHover(true)
      }
    }
  }

  // 绑定事件
  window.addEventListener('mousemove', onMouseMove)

  // 组件卸载时移除事件
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove)
  })

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
