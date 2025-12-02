<template>
  <div class="home-container">
    <div class="canvas-container" ref="screenDom"></div>

    <div class="pages" ref="pages">
      <div class="page">
        <!-- 二级标题 -->
        <h2 class="title">Three初学</h2>
        <p>做官网动画效果</p>
      </div>
      <div class="page">
        <h2 class="title">Three进阶</h2>
        <p>做交互动画效果</p>
      </div>
      <div class="page">
        <h2 class="title">Three进阶</h2>
        <p>做交互动画效果</p>
      </div>
    </div>
  </div>
</template>
<script setup>    
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { gsap } from 'gsap/gsap-core'
import backgroundImage from '@/assets/images/stars.png'
// import { back } from '@/assets/images/back.hdr'
let screenDom = ref(null)
let pages = ref(null)
function initScence() {
  // 创建场景
  const scene = new THREE.Scene()
  // 创建相机
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 0, 10)
  // scene.add(camera)

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  screenDom.value.appendChild(renderer.domElement)
  // 星空背景
  // let starBackgroundURL = '@/assets/images/stars.png'
  // const cubeTextureLoader = new THREE.TextureLoader()
  // cubeTextureLoader.load(
  //   backgroundImage,
  //   function (texture) {
  //     // 纹理亮度变暗
  //     texture.encoding = THREE.sRGBEncoding
  //     // 优化纹理质量
  //     texture.anisotropy = Math.min(16, renderer.capabilities.getMaxAnisotropy())
  //     texture.minFilter = THREE.LinearFilter
  //     texture.magFilter = THREE.LinearFilter
  //     texture.generateMipmaps = false
  //     // texture.mapping = THREE.EquirectangularReflectionMapping

  //     scene.background = texture
  //     scene.environment = texture
  //   }
  // )
  // cubeTextureLoader.encoding = THREE.sRGBEncoding




  // 添加控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.25
  controls.enableZoom = true
  controls.enablePan = true

  controls.minDistance = 5
  controls.maxDistance = 20
  controls.update()
  // 添加灯光
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.position.set(0, 0, 1)
  scene.add(light)
  let light2 = new THREE.DirectionalLight(0xffffff, 0.5)
  light2.position.set(0, 0, -1)
  scene.add(light2)
  const light3 = new THREE.AmbientLight(0xffffff, 0.5)
  light3.position.set(-1, -1, -1)
  scene.add(light3)
  // 实例化加载3个模型
  let loaderOne = new GLTFLoader()
  const gnomeOne = loaderOne.load(
    '/space/space.gltf',
    (gltf) => {
      console.log('模型加载没问题', gltf.scene)
      gltf.scene.scale.set(0.1, 0.1, 0.1)
      gltf.scene.position.set(3.5, 0, 0)
      const gnome = gltf.scene
      scene.add(gnome)

      window.addEventListener('mousemove', (event) => {
        let mouseX = (event.clientX / window.innerWidth) * 2 - 1
        let mouseY = (event.clientY / window.innerHeight) * 2 - 1
        let timeline = gsap.timeline()
        timeline.to(gnome.rotation, {
          duration: 0.5,
          ease: 'power2.out',
          x: mouseY,
          y: mouseX,
        })
      })
    },
    undefined,
    (error) => {
      console.error('加载 GLTF 模型出错：', error)
    },
  )
  // let loaderSecond = new GLTFLoader()
  // const gnomeSecond = loaderSecond.load(
  //   '/trans/trans.gltf',
  //   (gltf) => {
  //     gltf.scene.scale.set(.8, .8, .8)
  //     gltf.scene.position.set(3.5, 0, 0)
  //     const gnome = gltf.scene
  //     scene.add(gnome)

  //     window.addEventListener('mousemove', (event) => {
  //       let mouseX = (event.clientX / window.innerWidth) * 2 - 1
  //       let mouseY = (event.clientY / window.innerHeight) * 2 - 1
  //       let timeline = gsap.timeline()
  //       timeline.to(gnome.rotation, {
  //         x: mouseY,
  //         y: mouseX,
  //         duration: 0.5,
  //       })
  //     })
  //   },
  //   undefined,
  //   (error) => {
  //     console.error('加载 GLTF 模型出错：', error)
  //   },
  // )
  // let loaderThird = new GLTFLoader()
  // const gnomeThird = loaderThird.load(
  //   '/whiteRobot/whiteRobot.gltf',
  //   (gltf) => {
  //     gltf.scene.scale.set(1.5, 1.5, 1.5)
  //     gltf.scene.position.set(3.5, 0, 0)
  //     const gnome = gltf.scene
  //     scene.add(gnome)

  //     window.addEventListener('mousemove', (event) => {
  //       let mouseX = (event.clientX / window.innerWidth) * 2 - 1
  //       let mouseY = (event.clientY / window.innerHeight) * 2 - 1
  //       let timeline = gsap.timeline()
  //       timeline.to(gnome.rotation, {
  //         x: mouseY,
  //         y: mouseX,
  //         duration: 0.5,
  //       })
  //     })
  //   },
  //   undefined,
  //   (error) => {
  //     console.error('加载 GLTF 模型出错：', error)
  //   },
  // )
  function render() {
    requestAnimationFrame(render)
    controls.update()
    renderer.render(scene, camera)
  }
  render()
}

onMounted(() => {
  initScence()
})
</script>
<style scoped lang="scss">
.home-container {
  padding: 0;
  margin: 0;
  // height: 100vh;
  // width: 100vw;
  // overflow: hidden;
  // position: relative;

  .canvas-container {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .pages {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    // width: 100%;
    // height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .page {
      display: flex;
      flex-direction: column;

      width: 100vw;
      height: 100vh;
      color: white;
      padding-left: 300px;
      justify-content: center;

      .title {
        font-size: 2.25rem;
        line-height: 1.1;
        font-weight: 700;
        margin: 0 0 12px 0;
        color: inherit;
      }

      p {
        font-size: 1rem;
        margin: 0;
        color: inherit;
      }
    }
  }
}
</style>