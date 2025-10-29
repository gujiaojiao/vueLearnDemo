<template>
  <!-- 3D场景容器：必须设置宽高，否则渲染器无法正常显示 -->
  <div class="three-container" ref="container"></div>
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
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// 声明核心变量：容器引用、场景/相机/渲染器实例、立方体对象、动画循环ID
const container = ref(null)
let scene, camera, renderer, cube, leftCube, rightCube, animationId, controls

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

  // --------------------------
  // 步骤3：创建WebGL渲染器
  // --------------------------
  renderer = new THREE.WebGLRenderer({ antialias: true }) // antialias开启抗锯齿，画面更平滑
  renderer.setSize(containerWidth, containerHeight) // 渲染尺寸与容器一致
  // 将渲染器生成的canvas元素，添加到页面容器中
  container.value.appendChild(renderer.domElement)

  // --------------------------
  // 添加 OrbitControls（支持鼠标拖拽旋转、缩放、平移）
  // --------------------------
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true // 开启阻尼（需要在 animate 中调用 controls.update()）
  controls.dampingFactor = 0.05
  controls.target.set(5, 0, 0) // 设置控制的焦点位置
  // 可选限制示例：
  // controls.minDistance = 2
  // controls.maxDistance = 20
  // controls.maxPolarAngle = Math.PI / 2

  // --------------------------
  // 步骤4：创建3D物体（立方体+彩色材质）
  // --------------------------
  // 4.1 几何体：BoxGeometry(宽, 高, 深)，定义立方体的形状
  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
  const cubeGeometrySecond = new THREE.BoxGeometry(1, 1, 1)
  // 4.2 材质：MeshNormalMaterial自带彩色效果，无需额外灯光
  const cubeMaterial = new THREE.MeshNormalMaterial({
    wireframe: false, // 是否显示线框（true时仅显示轮廓，适合调试）
    transparent: true, // 是否透明
    opacity: 0.2, // 透明度（0-1，仅transparent为true时生效）
  })

  // 新材质+加上图片
  const cubeMaterialWithImage = [
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(xiaoxinImage), // 加载纹理图片
      background: new THREE.Color(0xf0f0f0),
      // side: THREE.DoubleSide, // 双面可见
    }),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(chaiquanImage), // 加载纹理图片
      color: 0xf0f0f0,
      transparent: true,
      // side: THREE.DoubleSide, // 双面可见
    }),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(pig), // 加载纹理图片
      color: 0xf0f0f0,
      transparent: true,
      // side: THREE.DoubleSide, // 双面可见
    }),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(kingdog), // 加载纹理图片
      color: 0xf0f0f0,
      transparent: true,
      // side: THREE.DoubleSide, // 双面可见
    }),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(tianyuandog), // 加载纹理图片
      color: 0xf0f0f0,
      transparent: true,
      // side: THREE.DoubleSide, // 双面可见
    }),
    new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(cangshuImage), // 加载纹理图片
      color: 0xf0f0f0,
      transparent: true,
      // side: THREE.DoubleSide, // 双面可见
    }),
  ]


  // 4.3 网格对象：几何体+材质的组合，是Three.js中可渲染的3D物体
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  cube.add(new THREE.Mesh(cubeGeometrySecond, cubeMaterial))
  // 将立方体添加到场景中（未添加则不会被渲染）
  scene.add(cube)

  leftCube = new THREE.Mesh(cubeGeometry, cubeMaterialWithImage)
  leftCube.position.x = -4
  scene.add(leftCube)

  rightCube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  rightCube.position.x = 4
  scene.add(rightCube)
  // --------------------------
  // 步骤5：添加动画循环（实现立方体旋转）
  // --------------------------
  const animate = () => {
    // 请求浏览器下一帧动画（浏览器优化机制，避免卡顿）
    animationId = requestAnimationFrame(animate)

    // 更新控件（如果启用了阻尼必须调用）
    controls && controls.update()

    // 每帧更新立方体旋转角度（x轴、y轴各旋转0.01弧度）
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    // 同时旋转左右两侧的立方体
    leftCube.rotation.x += 0.002
    leftCube.rotation.y += 0.002
    rightCube.rotation.x += 0.03
    rightCube.rotation.y += 0.03

    // 渲染场景：将"场景"通过"相机"投射到页面
    renderer.render(scene, camera)
  }
  // 启动动画循环
  animate()
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
})
</script>

<style scoped>
/* 3D容器必须设置宽高，否则渲染器生成的canvas会是默认的100x100像素 */
.three-container {
  width: 100vw;
  height: 100vh;
  margin-top: 20px;
}
</style>
