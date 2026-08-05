import * as THREE from 'three'

export const getSafePixelRatio = () => {
  if (typeof window === 'undefined') return 1
  return Math.min(window.devicePixelRatio || 1, 2)
}

export const enhanceTextTexture = (texture, renderer) => {
  texture.minFilter = THREE.LinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.generateMipmaps = false
  if ('colorSpace' in texture) {
    texture.colorSpace = THREE.SRGBColorSpace
  }
  if (renderer?.capabilities?.getMaxAnisotropy) {
    texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy())
  }
  texture.needsUpdate = true
}

export const createProvinceLabel = ({
  name,
  position,
  mapGroup,
  camera,
  renderer,
}) => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const isJiangsu = name === '江苏省'
  const dpr = getSafePixelRatio()
  const logicalWidth = isJiangsu ? 360 : 256
  const logicalHeight = isJiangsu ? 120 : 64
  const baseFontSize = isJiangsu ? 56 : 28

  canvas.width = Math.floor(logicalWidth * dpr)
  canvas.height = Math.floor(logicalHeight * dpr)
  canvas.style.width = `${logicalWidth}px`
  canvas.style.height = `${logicalHeight}px`
  ctx.scale(dpr, dpr)

  const drawMainText = (isHover) => {
    ctx.clearRect(0, 0, logicalWidth, logicalHeight)

    if (!isJiangsu) {
      ctx.fillStyle = 'rgba(13, 22, 129, 0.3)'
      if (ctx.roundRect) {
        ctx.beginPath()
        ctx.roundRect(5, 5, logicalWidth - 10, logicalHeight - 10, 5)
        ctx.fill()
      } else {
        ctx.fillRect(5, 5, logicalWidth - 10, logicalHeight - 10)
      }

      ctx.font = `bold ${isHover ? 30 : 28}px Microsoft Yahei`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.lineWidth = 2
      ctx.strokeStyle = 'rgba(73, 208, 255, 0.35)'
      ctx.strokeText(name, logicalWidth / 2, logicalHeight / 2)
      ctx.fillStyle = '#ffffff'
      ctx.fillText(name, logicalWidth / 2, logicalHeight / 2)
      return
    }

    const fontSize = isHover ? 60 : 56
    const centerX = logicalWidth / 2
    const mainY = logicalHeight * 0.4

    ctx.font = `bold ${fontSize}px Microsoft Yahei`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.lineWidth = 2
    ctx.strokeStyle = 'rgba(73, 208, 255, 0.18)'
    ctx.shadowColor = 'rgba(124, 228, 255, 0.28)'
    ctx.shadowBlur = 14
    ctx.strokeText(name, centerX, mainY)
    ctx.fillStyle = '#ffffff'
    ctx.fillText(name, centerX, mainY)
    ctx.shadowBlur = 0
  }

  drawMainText(false)

  const texture = new THREE.CanvasTexture(canvas)
  enhanceTextTexture(texture, renderer)
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    depthTest: false,
  })

  const baseY = isJiangsu ? position.y + 0.1 : position.y + 2.2
  const baseZ = isJiangsu ? position.z + 8.5 : position.z
  const basePosition = new THREE.Vector3(position.x, baseY, baseZ)

  if (isJiangsu && camera) {
    const directionToCamera = camera.position
      .clone()
      .sub(basePosition)
      .setY(0)
      .normalize()
    basePosition.add(directionToCamera.multiplyScalar(1))
  }

  const aspect = logicalWidth / logicalHeight
  if (!isJiangsu) {
    const sprite = new THREE.Sprite(material)
    sprite.name = `label_${name}`
    sprite.position.copy(basePosition)
    sprite.renderOrder = 9999
    const baseWorldHeight = 0.6
    sprite.scale.set(baseWorldHeight * aspect, baseWorldHeight, 1)
    mapGroup.add(sprite)

    return {
      sprite,
      updateHover: (isHover) => {
        drawMainText(isHover)
        texture.needsUpdate = true
      },
      dispose: () => {
        texture.dispose()
        material.dispose()
      },
    }
  }

  const mainPlaneHeight = 1.42
  const reflectionPlaneHeight = 1.02
  const jiangsuBasePosition = basePosition.clone()
  const mainPlaneGeometry = new THREE.PlaneGeometry(
    mainPlaneHeight * aspect,
    mainPlaneHeight,
  )
  const mainPlaneMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide,
  })
  const mainMesh = new THREE.Mesh(mainPlaneGeometry, mainPlaneMaterial)
  mainMesh.name = `label_${name}_main`
  mainMesh.position.copy(jiangsuBasePosition)
  mainMesh.renderOrder = 9999
  mapGroup.add(mainMesh)

  const reflectionCanvas = document.createElement('canvas')
  reflectionCanvas.width = canvas.width
  reflectionCanvas.height = canvas.height
  reflectionCanvas.style.width = canvas.style.width
  reflectionCanvas.style.height = canvas.style.height
  const reflectionContext = reflectionCanvas.getContext('2d')
  reflectionContext.scale(dpr, dpr)
  const centerX = logicalWidth / 2
  const mainY = logicalHeight * 0.4

  const drawReflectionText = () => {
    const reflectionBaselineY = mainY + baseFontSize * 0.72
    const fadeStartY = mainY + baseFontSize * 0.22
    reflectionContext.clearRect(0, 0, logicalWidth, logicalHeight)
    reflectionContext.font = `bold ${baseFontSize}px Microsoft Yahei`
    reflectionContext.textAlign = 'center'
    reflectionContext.textBaseline = 'middle'
    const reflectionFill = reflectionContext.createLinearGradient(
      0,
      fadeStartY,
      0,
      logicalHeight,
    )
    reflectionFill.addColorStop(0, 'rgba(207, 242, 255, 0.42)')
    reflectionFill.addColorStop(0.38, 'rgba(139, 204, 255, 0.24)')
    reflectionFill.addColorStop(1, 'rgba(255, 255, 255, 0.04)')
    reflectionContext.fillStyle = reflectionFill
    reflectionContext.fillText(name, centerX, reflectionBaselineY)
    reflectionContext.globalCompositeOperation = 'destination-in'
    const fade = reflectionContext.createLinearGradient(
      0,
      fadeStartY,
      0,
      logicalHeight,
    )
    fade.addColorStop(0, 'rgba(0,0,0,1)')
    fade.addColorStop(1, 'rgba(0,0,0,0)')
    reflectionContext.fillStyle = fade
    reflectionContext.fillRect(
      0,
      fadeStartY,
      logicalWidth,
      logicalHeight - fadeStartY,
    )
    reflectionContext.globalCompositeOperation = 'source-over'
  }

  drawReflectionText()

  const reflectionTexture = new THREE.CanvasTexture(reflectionCanvas)
  enhanceTextTexture(reflectionTexture, renderer)
  const reflectionMaterial = new THREE.MeshBasicMaterial({
    map: reflectionTexture,
    transparent: true,
    opacity: 0.42,
    depthWrite: false,
    depthTest: false,
    side: THREE.DoubleSide,
  })
  const reflectionMeshGeometry = new THREE.PlaneGeometry(
    reflectionPlaneHeight * aspect,
    reflectionPlaneHeight,
  )
  const reflectionMesh = new THREE.Mesh(
    reflectionMeshGeometry,
    reflectionMaterial,
  )
  reflectionMesh.name = `label_${name}_reflect`
  reflectionMesh.position.set(
    jiangsuBasePosition.x,
    jiangsuBasePosition.y - 0.74,
    jiangsuBasePosition.z,
  )
  reflectionMesh.scale.y = -1
  reflectionMesh.renderOrder = 9998
  mapGroup.add(reflectionMesh)

  return {
    mesh: mainMesh,
    reflection: reflectionMesh,
    updateHover: () => {},
    dispose: () => {
      texture.dispose()
      material.dispose()
      mainPlaneGeometry.dispose()
      mainPlaneMaterial.dispose()
      reflectionTexture.dispose()
      reflectionMeshGeometry.dispose()
      reflectionMaterial.dispose()
    },
  }
}

export const createBarValueLabel = ({
  cityName,
  layout,
  cityData,
  mapGroup,
  totalEvaluationUnits,
  renderer,
}) => {
  const { position, side } = layout
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const dpr = getSafePixelRatio()
  const width = 224
  const height = 116

  canvas.width = Math.floor(width * dpr)
  canvas.height = Math.floor(height * dpr)
  canvas.style.width = `${width}px`
  canvas.style.height = `${height}px`
  ctx.scale(dpr, dpr)

  const share = totalEvaluationUnits
    ? ((cityData.total / totalEvaluationUnits) * 100).toFixed(1)
    : '0.0'

  const isLeft = side === 'left'
  const panelX = isLeft ? 62 : 18
  const panelY = 4
  const panelWidth = 136
  const panelHeight = 78
  const anchorX = isLeft ? width - 14 : 14
  const anchorY = 102
  const panelJoinX = isLeft ? panelX + panelWidth : panelX

  ctx.beginPath()
  ctx.moveTo(anchorX, anchorY)
  ctx.lineTo(panelJoinX, panelY + panelHeight * 0.6)
  ctx.strokeStyle = 'rgba(101, 226, 242, 0.75)'
  ctx.lineWidth = 1.8
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(anchorX, anchorY, 3.5, 0, Math.PI * 2)
  ctx.fillStyle = '#6cecff'
  ctx.fill()

  ctx.fillStyle = 'rgba(8, 18, 38, 0.82)'
  ctx.strokeStyle = 'rgba(89, 220, 255, 0.68)'
  ctx.lineWidth = 1.5
  if (ctx.roundRect) {
    ctx.beginPath()
    ctx.roundRect(panelX, panelY, panelWidth, panelHeight, 10)
    ctx.fill()
    ctx.stroke()
  } else {
    ctx.fillRect(panelX, panelY, panelWidth, panelHeight)
    ctx.strokeRect(panelX, panelY, panelWidth, panelHeight)
  }

  const lineGradient = ctx.createLinearGradient(
    panelX,
    panelY + 28,
    panelX + panelWidth,
    panelY + 28,
  )
  lineGradient.addColorStop(0, 'rgba(79, 195, 247, 0)')
  lineGradient.addColorStop(0.5, 'rgba(79, 195, 247, 0.65)')
  lineGradient.addColorStop(1, 'rgba(79, 195, 247, 0)')
  ctx.fillStyle = lineGradient
  ctx.fillRect(panelX + 10, panelY + 28, panelWidth - 20, 1)

  ctx.textAlign = 'left'
  ctx.textBaseline = 'middle'
  ctx.font = 'bold 18px Microsoft YaHei'
  ctx.fillStyle = '#f2fcff'
  ctx.fillText(cityName, panelX + 12, panelY + 16)

  ctx.font = 'bold 24px Microsoft YaHei'
  ctx.fillStyle = '#6cecff'
  ctx.fillText(`${cityData.total}家参评`, panelX + 12, panelY + 43)

  ctx.font = '14px Microsoft YaHei'
  ctx.fillStyle = '#95dfff'
  ctx.fillText(`占全省参评 ${share}%`, panelX + 12, panelY + 64)

  const texture = new THREE.CanvasTexture(canvas)
  enhanceTextTexture(texture, renderer)
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
    depthTest: false,
  })

  const sprite = new THREE.Sprite(material)
  sprite.position.copy(position)
  sprite.scale.set(2.2, 1.14, 1)
  sprite.renderOrder = 10000
  mapGroup.add(sprite)

  return { sprite, texture, material }
}
