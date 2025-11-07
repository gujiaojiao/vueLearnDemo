<template>
  <div>

    <!-- 3D场景容器：必须设置宽高，否则渲染器无法正常显示 -->
    <div class="three-container" ref="container">
      <!-- 进入全屏按钮 -->
      <!-- <span class="full-screen enter" @click="enterFullScreen">全屏展示</span> -->
      <!-- 退出全屏 -->
      <!-- <span class="full-screen exit" @click="exitFullScreen">退出全屏</span> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// 导入Three.js核心模块（* as THREE表示导入所有核心功能）
import * as THREE from 'three'
import xiaoxinImage from '@/assets/images/xiaoxin.png'
import chaiquanImage from '@/assets/images/chaiquan.png'
import cangshuImage from '@/assets/images/cangshu.png'
import pig from '@/assets/images/pig.png'
import kingdog from '@/assets/images/kingdog.png'
import tianyuandog from '@/assets/images/tianyuandog.png'
// import environmentHdr from '@/assets/images/environment.hdr'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';
// 声明核心变量：容器引用、场景/相机/渲染器实例、立方体对象、动画循环ID
const container = ref(null)
const environmentHdr = '/public/environment.hdr'
let scene, camera, renderer, cube, leftCube, rightCube, animationId, controls, gui

// 初始化3D场景的核心函数
const initScene = () => {
  // --------------------------
  // 步骤1：创建场景（Scene）
  // --------------------------
  scene = new THREE.Scene()
  // 可选：设置场景背景色（默认黑色，这里设为浅灰色提升视觉体验）
  scene.background = new THREE.Color(0xf0f0f0)
  // --------------------------
  // 步骤2：创建透视相机（模拟人眼视角）
  // 参数说明：fov(视角角度)、aspect(宽高比)、near(近裁剪面)、far(远裁剪面)
  // --------------------------
  const containerWidth = container.value.clientWidth
  const containerHeight = container.value.clientHeight
  camera = new THREE.PerspectiveCamera(
    75,
    containerWidth / containerHeight,
    0.1,
    1000,
  )

  // 调整相机位置：默认在(0,0,0)，与立方体重叠会看不到，故沿z轴后移5个单位
  camera.position.z = 10

  // 添加辅助线
  const axesHelper = new THREE.AxesHelper(5) // 参数为辅助线长度
  scene.add(axesHelper)

  // --------------------------
  // 步骤3：创建WebGL渲染器
  // --------------------------
  renderer = new THREE.WebGLRenderer({ antialias: true }) // antialias开启抗锯齿，画面更平滑
  renderer.setSize(containerWidth, containerHeight) // 渲染尺寸与容器一致
  // 将渲染器生成的canvas元素，添加到页面容器中
  container.value.appendChild(renderer.domElement)

  // 设置编码与色调映射以正确显示 HDR / 环境贴图
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.0
  container.value.appendChild(renderer.domElement)
  // --------------------------
  // 加载 HDR 环境贴图并生成 PMREM 环境贴图（推荐流程）
  // --------------------------
  // 使用 PMREM（推荐，更好的反射效果）
  const pmrem = new THREE.PMREMGenerator(renderer);
  new HDRLoader().loadAsync('/environment.hdr').then(texture => {
    const envMap = pmrem.fromEquirectangular(texture).texture;
    scene.environment = envMap;
    scene.background = envMap;
    texture.dispose();
    pmrem.dispose();
  }).catch(error => console.error('HDR 加载失败：', error));


  // --------------------------
  // 添加 OrbitControls（支持鼠标拖拽旋转、缩放、平移）
  // --------------------------
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true // 开启阻尼（需要在 animate 中调用 controls.update()）
  controls.dampingFactor = 0.05
  controls.target.set(0, 0, 0) // 设置控制的焦点位置
  // 可选限制示例：
  // controls.minDistance = 2
  // controls.maxDistance = 20
  // controls.maxPolarAngle = Math.PI / 2

  // --------------------------
  // 步骤4：创建3D物体（立方体+彩色材质）
  // --------------------------
  // 4.1 几何体：BoxGeometry(宽, 高, 深)，定义立方体的形状
  // const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
  // const cubeGeometrySecond = new THREE.BoxGeometry(1, 1, 1)
  // 4.2 材质：MeshNormalMaterial自带彩色效果，无需额外灯光
  // const cubeMaterial = new THREE.MeshNormalMaterial({
  //   wireframe: false, // 是否显示线框（true时仅显示轮廓，适合调试）
  //   transparent: true, // 是否透明
  //   opacity: 1, // 透明度（0-1，仅transparent为true时生效）
  // })

  // // 新材质+加上图片
  // const cubeMaterialWithImage = [
  //   new THREE.MeshBasicMaterial({
  //     map: new THREE.TextureLoader().load(xiaoxinImage), // 加载纹理图片
  //     background: new THREE.Color(0xf0f0f0),
  //     // side: THREE.DoubleSide, // 双面可见
  //   }),
  //   new THREE.MeshBasicMaterial({
  //     map: new THREE.TextureLoader().load(chaiquanImage), // 加载纹理图片
  //     color: 0xf0f0f0,
  //     transparent: true,
  //     // side: THREE.DoubleSide, // 双面可见
  //   }),
  //   new THREE.MeshBasicMaterial({
  //     map: new THREE.TextureLoader().load(pig), // 加载纹理图片
  //     color: 0xf0f0f0,
  //     transparent: true,
  //     // side: THREE.DoubleSide, // 双面可见
  //   }),
  //   new THREE.MeshBasicMaterial({
  //     map: new THREE.TextureLoader().load(kingdog), // 加载纹理图片
  //     color: 0xf0f0f0,
  //     transparent: true,
  //     // side: THREE.DoubleSide, // 双面可见
  //   }),
  //   new THREE.MeshBasicMaterial({
  //     map: new THREE.TextureLoader().load(tianyuandog), // 加载纹理图片
  //     color: 0xf0f0f0,
  //     transparent: true,
  //     // side: THREE.DoubleSide, // 双面可见
  //   }),
  //   new THREE.MeshBasicMaterial({
  //     map: new THREE.TextureLoader().load(cangshuImage), // 加载纹理图片
  //     color: 0xf0f0f0,
  //     transparent: true,
  //     // side: THREE.DoubleSide, // 双面可见
  //   }),
  // ]

  // // 4.3 网格对象：几何体+材质的组合，是Three.js中可渲染的3D物体
  // cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  // cube.add(new THREE.Mesh(cubeGeometrySecond, cubeMaterial))
  // cube.scale.set(1.5, 1.5, 1.5) // 缩放立方体尺寸为原来的1.5倍
  // // 将立方体添加到场景中（未添加则不会被渲染）
  // scene.add(cube)

  // leftCube = new THREE.Mesh(cubeGeometry, cubeMaterialWithImage)
  // leftCube.position.x = -4
  // scene.add(leftCube)

  // rightCube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  // rightCube.position.x = 4
  // scene.add(rightCube)


  //步骤4.1：创建新的网格对象，5个球
  const sphereGeometry = new THREE.SphereGeometry(1, 32, 32) // 创建球体几何体
  const sphereMaterial1 = new THREE.MeshStandardMaterial({
    color: '#f3c5e2',
    metalness: 0,      // 降低金属度
    roughness: 0.2,    // 降低粗糙度使表面更光滑
    transparent: true,
    opacity: 1,      // 增加透明度
    transmission: 0.5, // 透光度
    clearcoat: 1,      // 清漆层强度
    clearcoatRoughness: 0.1, // 清漆层粗糙度
  })
  const sphereMaterial2 = new THREE.MeshStandardMaterial({
    color: '#309979',
    etalness: 0,      // 降低金属度
    roughness: 0.2,    // 降低粗糙度使表面更光滑
    transparent: true,
    opacity: 1,      // 增加透明度
    transmission: 0.5, // 透光度
    clearcoat: 1,      // 清漆层强度
    clearcoatRoughness: 0.1, // 清漆层粗糙度
  })
  const sphereMaterial3 = new THREE.MeshStandardMaterial({
    color: '#659fe5',
    etalness: 0,      // 降低金属度
    roughness: 0.2,    // 降低粗糙度使表面更光滑
    transparent: true,
    opacity: 1,      // 增加透明度
    transmission: 0.5, // 透光度
    clearcoat: 1,      // 清漆层强度
    clearcoatRoughness: 0.1, // 清漆层粗糙度
  })
  const sphereMaterial4 = new THREE.MeshStandardMaterial({
    color: '#f5866e',
    etalness: 0,      // 降低金属度
    roughness: 0.2,    // 降低粗糙度使表面更光滑
    transparent: true,
    opacity: 1,      // 增加透明度
    transmission: 0.5, // 透光度
    clearcoat: 1,      // 清漆层强度
    clearcoatRoughness: 0.1, // 清漆层粗糙度
  })
  const sphereMaterial5 = new THREE.MeshStandardMaterial({
    color: '#f9e26b',
    etalness: 0,      // 降低金属度
    roughness: 0.2,    // 降低粗糙度使表面更光滑
    transparent: true,
    opacity: 1,      // 增加透明度
    transmission: 0.5, // 透光度
    clearcoat: 1,      // 清漆层强度
    clearcoatRoughness: 0.1, // 清漆层粗糙度
  })
  //添加环境光和平行光以增强效果
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
  scene.add(ambientLight)

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  const sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial1)
  sphere1.position.set(-8, 0, 0)
  const sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial2)
  sphere2.position.x = -4
  const sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial3)
  sphere3.position.y = 0
  const sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial4)
  sphere4.position.x = 4
  const sphere5 = new THREE.Mesh(sphereGeometry, sphereMaterial5)
  sphere5.position.x = 8
  scene.add(sphere1)
  scene.add(sphere2)
  scene.add(sphere3)
  scene.add(sphere4)
  scene.add(sphere5)
  // --------------------------
  // 步骤5：添加动画循环（实现立方体旋转）
  // --------------------------
  const animate = () => {
    // 请求浏览器下一帧动画（浏览器优化机制，避免卡顿）
    animationId = requestAnimationFrame(animate)

    // 更新控件（如果启用了阻尼必须调用）
    controls && controls.update()

    // // 每帧更新立方体旋转角度（x轴、y轴各旋转0.01弧度）
    // cube.rotation.x += 0.01
    // cube.rotation.y += 0.01

    // // 同时旋转左右两侧的立方体
    // leftCube.rotation.x += 0.002
    // leftCube.rotation.y += 0.002
    // rightCube.rotation.x += 0.03
    // rightCube.rotation.y += 0.03

    // 渲染场景：将"场景"通过"相机"投射到页面
    renderer.render(scene, camera)
  }
  // 启动动画循环
  animate()

  // 创建 GUI 并挂载到 three-container（不用额外 div）
  try {
    gui = new GUI()
    const guiActions = { enterFullScreen, exitFullScreen }
    gui.add(guiActions, 'enterFullScreen').name('全屏')
    gui.add(guiActions, 'exitFullScreen').name('退出全屏')
    let cubeFolder = gui.addFolder('中间立方体位置')
    cubeFolder.add(cube.position, 'x', -10, 10, 1).name('立方体x轴位置')
    cubeFolder.add(cube.position, 'y', -10, 10, 1).name('立方体y轴位置').onFinishChange(() => {
      console.log('cube.position.y:', cube.position.y)
    })
    cubeFolder.add(cube.position, 'z', -10, 10, 1).name('立方体z轴位置')
    gui.add(cubeMaterial, 'wireframe').name('是否显示线框')

  } catch (error) {
    console.warn('GUI 初始化失败：', error)
  }
}

const enterFullScreen = () => {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
// 窗口大小自适应函数（避免窗口缩放后场景变形）
const handleWindowResize = () => {
  if (!camera || !renderer || !container.value) return
  // 更新容器宽高
  const newWidth = container.value.clientWidth
  const newHeight = container.value.clientHeight
  // 更新相机宽高比，并重新计算投影矩阵（必须执行，否则视角会变形）
  camera.aspect = newWidth / newHeight
  camera.updateProjectionMatrix()
  // 更新渲染器尺寸
  renderer.setSize(newWidth, newHeight)
}

// Vue生命周期钩子：确保DOM加载完成后初始化场景
onMounted(() => {
  initScene()
  // 监听窗口缩放事件
  window.addEventListener('resize', handleWindowResize)
})

// Vue生命周期钩子：组件销毁时清理资源（避免内存泄漏）
onUnmounted(() => {

  // 移除窗口缩放监听
  window.removeEventListener('resize', handleWindowResize)
  // 停止动画循环
  cancelAnimationFrame(animationId)

  // 销毁控件
  controls && controls.dispose()
  // 销毁渲染器（释放GPU资源）
  renderer.dispose()
  // 销毁GUI
  gui && gui.destroy()
})
</script>

<style scoped>
/* 3D容器必须设置宽高，否则渲染器生成的canvas会是默认的100x100像素 */
.three-container {
  width: 100vw;
  height: 100vh;
  margin-top: 20px;
}

.full-screen {
  position: relative;
  width: fit-content;
  padding: 5px 10px;
  z-index: 100;
  background-color: #76a47d;
  border-radius: 5px;
  color: whitesmoke;
}
.enter {
  left: 20px;
}
.exit {
  left: 40px;
}
</style>
