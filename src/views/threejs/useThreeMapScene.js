import { onUnmounted } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { gsap } from 'gsap/gsap-core'
import borderBlue from '@/assets/images/borderBlue.png'
import borderTwo from '@/assets/images/borderTwo.png'
import { createVisualizationMap } from './three/gridEffects'
import { createFlyLineController } from './three/flyLines'
import { buildChinaMap } from './three/mapBuilder'
import { getSafePixelRatio } from './three/mapLabels'

export const useThreeMapScene = ({
  mapWeb,
  flyEffectActive,
  particleEffect,
  activeCity,
  cityEvaluationMap,
  totalEvaluationUnits,
  sceneReady,
}) => {
  const provinceLabels = new Map()
  const cityMeshes = new Map()
  const cityCenters = []
  const farViewPos = new THREE.Vector3(0, 160, 0.1)
  const nearViewPos = new THREE.Vector3(4, 10, 11)

  let scene = null
  let camera = null
  let renderer = null
  let controls = null
  let mapGroup = null
  let gridSystem = null
  let isFarView = true
  let hoveredProvince = null
  let highlightedCity = null
  let cleanupFns = []
  let animationFrameId = null
  let lastTime = 0
  let hasRenderedFirstFrame = false

  const flyLineController = createFlyLineController({
    getMapGroup: () => mapGroup,
    getCityCenters: () => cityCenters,
  })

  const registerWindowEvent = (eventName, handler, options) => {
    window.addEventListener(eventName, handler, options)
    cleanupFns.push(() =>
      window.removeEventListener(eventName, handler, options),
    )
  }

  const createCenterDecoration = (
    texturePath,
    size,
    duration,
    reverse = false,
  ) => {
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load(texturePath, (texture) => {
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping

      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
        new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide,
          blending: THREE.NormalBlending,
          depthWrite: false,
        }),
      )

      plane.position.set(1, 0.5, -2)
      plane.rotation.x = -Math.PI / 2
      scene.add(plane)

      gsap.to(plane.rotation, {
        z: reverse ? -Math.PI * 2 : Math.PI * 2,
        duration,
        repeat: -1,
        ease: 'linear',
      })
    })
  }

  const highlightCity = (cityName) => {
    if (highlightedCity && cityMeshes.has(highlightedCity)) {
      cityMeshes.get(highlightedCity).forEach((mesh) => {
        if (mesh.userData.origColor) {
          mesh.material.color.set(mesh.userData.origColor)
        }
        mesh.material.opacity = mesh.userData.origOpacity ?? 0.8
      })
    }

    if (!cityName) {
      highlightedCity = null
      activeCity.value = '全省'
      return
    }

    if (cityMeshes.has(cityName)) {
      cityMeshes.get(cityName).forEach((mesh) => {
        mesh.userData.origColor =
          mesh.userData.origColor || mesh.material.color.getHex()
        mesh.userData.origOpacity =
          mesh.userData.origOpacity ?? mesh.material.opacity
        mesh.material.color.set(0xa6cde6)
        mesh.material.opacity = 1
      })
      highlightedCity = cityName
      activeCity.value = cityName
    }
  }

  const switchToNearView = () => {
    if (!isFarView) return
    isFarView = false
    controls.enabled = false
    gsap.to(camera.position, {
      x: nearViewPos.x,
      y: nearViewPos.y,
      z: nearViewPos.z,
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(0, 0, 0)
        controls.update()
      },
      onComplete: () => {
        controls.enabled = true
        controls.minDistance = 2
        controls.maxDistance = 80
        controls.update()
      },
    })
  }

  const switchToFarView = () => {
    if (isFarView) return
    isFarView = true
    controls.enabled = false
    gsap.to(camera.position, {
      x: farViewPos.x,
      y: farViewPos.y,
      z: farViewPos.z,
      duration: 1.2,
      ease: 'power2.inOut',
      onUpdate: () => {
        camera.lookAt(0, 0, 0)
        controls.update()
      },
      onComplete: () => {
        controls.enabled = false
        controls.minDistance = 1
        controls.maxDistance = 1000
        controls.update()
      },
    })
  }

  const onResize = () => {
    const width = window.innerWidth
    const height = window.innerHeight
    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setPixelRatio(getSafePixelRatio())
    renderer.setSize(width, height)
  }

  const startRenderLoop = () => {
    lastTime = performance.now()

    const renderScene = (currentTime) => {
      animationFrameId = requestAnimationFrame(renderScene)
      const deltaTime = (currentTime - lastTime) / 1000
      lastTime = currentTime

      gridSystem?.updateParticles(deltaTime)
      if (flyEffectActive.value) {
        flyLineController.update(deltaTime)
      }

      provinceLabels.forEach((label) => {
        if (label.sprite) {
          label.sprite.quaternion.copy(camera.quaternion)
        }
      })

      renderer.render(scene, camera)

      if (!hasRenderedFirstFrame) {
        hasRenderedFirstFrame = true
        sceneReady && (sceneReady.value = true)
      }
    }

    animationFrameId = requestAnimationFrame(renderScene)
  }

  const bindInteractions = () => {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()

    const updateMouse = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(mouse, camera)
    }

    registerWindowEvent(
      'wheel',
      () => {
        if (isFarView) switchToNearView()
      },
      { passive: true },
    )
    registerWindowEvent('click', () => {
      if (isFarView) switchToNearView()
    })
    registerWindowEvent('dblclick', switchToFarView)
    registerWindowEvent('resize', onResize)

    registerWindowEvent('mousemove', (event) => {
      if (!mapGroup) return
      updateMouse(event)
      const provinceMeshes = mapGroup.children.filter(
        (item) => item.isMesh && item.userData?.province,
      )
      const intersects = raycaster.intersectObjects(provinceMeshes)
      const nextProvince = intersects[0]?.object?.userData?.province || null

      if (hoveredProvince && hoveredProvince !== nextProvince) {
        provinceLabels.get(hoveredProvince)?.updateHover(false)
      }
      if (nextProvince && nextProvince !== hoveredProvince) {
        provinceLabels.get(nextProvince)?.updateHover(true)
      }
      hoveredProvince = nextProvince
    })

    registerWindowEvent('click', (event) => {
      if (!mapGroup) return
      updateMouse(event)
      const meshes = Array.from(cityMeshes.values()).flat()
      const intersects = raycaster.intersectObjects(meshes)
      highlightCity(intersects[0]?.object?.userData?.city || null)
    })
  }

  const toggleFlyEffect = () => {
    flyEffectActive.value = !flyEffectActive.value
    if (flyEffectActive.value) {
      flyLineController.create(8)
    } else {
      flyLineController.remove()
    }
  }

  const toggleParticleEffect = () => {
    particleEffect.value = !particleEffect.value
    if (particleEffect.value) {
      gridSystem?.addParticle()
    } else {
      gridSystem?.removeParticle()
    }
  }

  const initScene = async () => {
    sceneReady && (sceneReady.value = false)
    scene = new THREE.Scene()
    scene.background = new THREE.Color(0x192b41)
    scene.fog = new THREE.Fog(0x192b41, 10, 100)

    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.copy(farViewPos)
    camera.lookAt(0, 0, 0)
    scene.add(camera)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(getSafePixelRatio())
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(scene.background)
    mapWeb.value?.appendChild(renderer.domElement)
    renderer.render(scene, camera)

    scene.add(new THREE.AmbientLight(0xfaaaaa))
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.position.set(0, 0, 1)
    scene.add(directionalLight)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.25
    controls.enableZoom = true
    controls.enablePan = true
    controls.enabled = false
    controls.minDistance = 1
    controls.maxDistance = 1000
    controls.target.set(0, 0, 0)
    controls.update()

    createCenterDecoration(borderBlue, 18, 45)
    createCenterDecoration(borderTwo, 20, 35, true)

    gridSystem = createVisualizationMap(scene)
    mapGroup = await buildChinaMap({
      scene,
      camera,
      renderer,
      cityEvaluationMap,
      totalEvaluationUnits,
      provinceLabels,
      cityMeshes,
      cityCenters,
    })

    if (flyEffectActive.value) {
      flyLineController.create(8)
    }

    bindInteractions()
    startRenderLoop()
  }

  const dispose = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
    }
    cleanupFns.forEach((cleanup) => cleanup())
    cleanupFns = []
    flyLineController.dispose()
    gridSystem?.dispose()
    provinceLabels.forEach((label) => label.dispose?.())
    hasRenderedFirstFrame = false
    sceneReady && (sceneReady.value = false)
    renderer?.dispose()
    renderer?.domElement?.remove()
  }

  onUnmounted(dispose)

  return {
    initScene,
    toggleFlyEffect,
    toggleParticleEffect,
  }
}
