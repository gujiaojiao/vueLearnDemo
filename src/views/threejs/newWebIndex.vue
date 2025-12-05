<template>
  <div class="home-container">
    <div class="canvas-container" ref="screenDom"></div>

    <div class="pages" ref="pages">
      <div class="page">
        <!-- 二级标题 -->
        <h2 class="title">Three(1)</h2>
        <p>做官网动画效果</p>
      </div>
      <div class="page">
        <h2 class="title">Three(2)</h2>
        <p>做交互动画效果</p>
      </div>
      <div class="page">
        <h2 class="title">Three(3)</h2>
        <p>可视化大屏页面</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { gsap } from 'gsap/gsap-core'
import backgroundImage from '@/assets/images/stars.png'
// import { back } from '@/assets/images/back.hdr'
let screenDom = ref(null)
let pages = ref(null)

let page = 0
let timeline2 = gsap.timeline()
function initScence() {
  // 创建场景
  const scene = new THREE.Scene()
  // 创建相机
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100000,
  )
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
  // const controls = new OrbitControls(camera, renderer.domElement)
  // controls.enableDamping = true
  // controls.dampingFactor = 0.25
  // controls.enableZoom = true
  // controls.enablePan = true

  // controls.minDistance = 5
  // controls.maxDistance = 20
  // controls.update()
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
      gltf.scene.scale.set(0.1, 0.1, 0.1)
      gltf.scene.position.set(4, 0, 0)
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
  let loaderSecond = new GLTFLoader()
  const gnomeSecond = loaderSecond.load(
    '/trans/trans.gltf',
    (gltf) => {
      gltf.scene.scale.set(0.8, 0.8, 0.8)
      gltf.scene.position.set(3.5, -10, 0)
      const gnome = gltf.scene
      scene.add(gnome)

      window.addEventListener('mousemove', (event) => {
        let mouseX = (event.clientX / window.innerWidth) * 2 - 1
        let mouseY = (event.clientY / window.innerHeight) * 2 - 1
        let timeline = gsap.timeline()
        timeline.to(gnome.rotation, {
          x: mouseY,
          y: mouseX,
          duration: 0.5,
        })
      })
    },
    undefined,
    (error) => {
      console.error('加载 GLTF 模型出错：', error)
    },
  )
  let loaderThird = new GLTFLoader()
  const gnomeThird = loaderThird.load(
    '/whiteRobot/whiteRobot.gltf',
    (gltf) => {
      gltf.scene.scale.set(1.5, 1.5, 1.5)
      gltf.scene.position.set(3.5, -21, 0)
      const gnome = gltf.scene
      scene.add(gnome)

      window.addEventListener('mousemove', (event) => {
        let mouseX = (event.clientX / window.innerWidth) * 2 - 1
        let mouseY = (event.clientY / window.innerHeight) * 2 - 1
        let timeline = gsap.timeline()
        timeline.to(gnome.rotation, {
          x: mouseY,
          y: mouseX,
          duration: 0.5,
        })
      })
    },
    undefined,
    (error) => {
      console.error('加载 GLTF 模型出错：', error)
    },
  )

  // 添加月球模型
  const loader = new GLTFLoader()
  loader.load(
    '/Moon.glb',
    (gltf) => {
      const moon = gltf.scene.children[0]
      if (moon.material) {
        // 克隆材质避免影响原材质
        moon.material = moon.material.clone()

        // 设置适中的自发光效果
        moon.material.emissive = new THREE.Color(0xfffffa) // 暖白色发光
        moon.material.emissiveIntensity = 0.3
        // 保持材质的粗糙度和金属度，以获得真实的光影效果
        if (moon.material.type === 'MeshStandardMaterial') {
          moon.material.roughness = 0.2
          moon.material.metalness = 0.1
        }
      }
      const pointLight = new THREE.PointLight(0xff0000, 1, 50) // 颜色，强度，距离
      pointLight.position.set(0, -5, 5) // 设置光源位置
      scene.add(pointLight)
      // const ambientLight = new THREE.AmbientLight(0x404040, 1)
      // scene.add(ambientLight)
      for (let j = 0; j < 10; j++) {
        let moonInstance = new THREE.InstancedMesh(
          moon.geometry,
          moon.material,
          100,
        )
        for (let i = 0; i < 100; i++) {
          let x = Math.random() * 1000 - 500
          let y = Math.random() * 1000 - 500
          let z = Math.random() * 1000 - 500
          let scale = Math.random()
          let matrix = new THREE.Matrix4()
          matrix.makeScale(scale, scale, scale)
          matrix.makeTranslation(x, y, z)
          moonInstance.setMatrixAt(i, matrix)
        }
        // 添加点光源照亮月球
        const pointLight = new THREE.PointLight(0xffffff, 1, 500) // 颜色，强度，距离
        pointLight.position.set(0, 0, 5) // 设置光源位置
        scene.add(pointLight)
        gsap.to(moonInstance.position, {
          z: -1000,
          duration: Math.random() * 10 + 3,
          ease: 'linear',
          repeat: -1,
        })
        scene.add(moonInstance)
      }
    },
    undefined,
    (error) => {
      console.error('加载 GLTF 模型出错：', error)
    },
  )

  function render() {
    requestAnimationFrame(render)
    // controls.update()
    renderer.render(scene, camera)
  }
  render()

  return { scene, camera, renderer }
}

onMounted(() => {
  const { scene, camera, renderer } = initScence()
  const pagesElement = pages.value // 获取DOM元素引用

  // 节流函数
  function throttle(func, limit) {
    let inThrottle
    return function () {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }

  const handleScroll = throttle((e) => {
    e.preventDefault()

    if (e.wheelDelta < 0) {
      page++
      if (page > 2) {
        page = 2
      }
    } else if (e.wheelDelta > 0) {
      page--
      if (page < 0) {
        page = 0
      }
    }

    if (timeline2.isActive()) {
      timeline2.kill()
    }

    timeline2 = gsap.timeline()

    timeline2.to(camera.position, {
      y: page * -10,
      duration: 0.8,
    })

    // 确保pagesElement存在再执行动画
    if (pagesElement) {
      timeline2.to(
        pagesElement,
        {
          y: page * -window.innerHeight,
          duration: 0.8,
        },
        0,
      )
    }
  }, 800)

  window.addEventListener('mousewheel', handleScroll, { passive: false })

  // 清理函数
  onBeforeUnmount(() => {
    window.removeEventListener('mousewheel', handleScroll)
  })
})
// onBeforeUnmount(() => {
//   window.removeEventListener('mousewheel', handleScroll)
// })
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
    transform: translate3d(0, 0, 0);
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
