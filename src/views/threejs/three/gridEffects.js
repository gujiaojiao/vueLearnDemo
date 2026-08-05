import * as THREE from 'three'

const createParticleSystem = (scene, options = {}) => {
  let particlePoints = null
  let particleGeometry = null
  let particleMaterial = null
  let particleTexture = null
  let particleVelocities = null
  let particleCount = options.particleCount || 30

  const particleArea = {
    x: (options.layout?.row || 80) * (options.shapeSize || 0.5),
    z: (options.layout?.col || 80) * (options.shapeSize || 0.5),
    yMin: options.yMin || 0.1,
    yMax: options.yMax || 4,
  }

  const spawnParticles = (count = particleCount) => {
    if (particlePoints) return

    particleCount = count
    particleGeometry = new THREE.BufferGeometry()
    const particlePositions = new Float32Array(particleCount * 3)
    particleVelocities = new Float32Array(particleCount)
    const particleColors = new Float32Array(particleCount * 3)
    const baseColor = new THREE.Color(options.particleColor || 0x69e2f2)

    for (let i = 0; i < particleCount; i++) {
      const offset = i * 3
      particlePositions[offset] = (Math.random() - 0.5) * particleArea.x * 2
      particlePositions[offset + 1] = particleArea.yMin + Math.random() * 0.5
      particlePositions[offset + 2] = (Math.random() - 0.5) * particleArea.z * 2
      particleVelocities[i] = 0.5 + Math.random() * 1.5

      particleColors[offset] = baseColor.r
      particleColors[offset + 1] = baseColor.g
      particleColors[offset + 2] = baseColor.b
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3),
    )
    particleGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(particleColors, 3),
    )

    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.arc(64, 64, 60, 0, Math.PI * 2)
    ctx.fillStyle = 'rgba(220, 255, 255, 1)'
    ctx.fill()
    particleTexture = new THREE.CanvasTexture(canvas)

    particleMaterial = new THREE.PointsMaterial({
      size: options.particleSize || 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      map: particleTexture,
    })

    particlePoints = new THREE.Points(particleGeometry, particleMaterial)
    particlePoints.position.copy(
      options.position || new THREE.Vector3(0, -5, 0),
    )
    scene.add(particlePoints)
  }

  const updateParticles = (deltaTime) => {
    if (!particlePoints) return

    const positions = particleGeometry.attributes.position.array
    const colors = particleGeometry.attributes.color.array
    const baseColor = new THREE.Color(options.particleColor || 0x69e2f2)
    const fadeColor = new THREE.Color(options.pointColor || 0x2d4f73)

    for (let i = 0; i < particleCount; i++) {
      const offset = i * 3
      positions[offset + 1] += particleVelocities[i] * deltaTime
      positions[offset] += (Math.random() - 0.5) * 0.01
      positions[offset + 2] += (Math.random() - 0.5) * 0.01

      const ratio = Math.min(
        1,
        (positions[offset + 1] - particleArea.yMin) /
          (particleArea.yMax - particleArea.yMin),
      )
      const mixed = baseColor.clone().lerp(fadeColor, ratio)
      colors[offset] = mixed.r
      colors[offset + 1] = mixed.g
      colors[offset + 2] = mixed.b

      if (positions[offset + 1] > particleArea.yMax) {
        positions[offset] = (Math.random() - 0.5) * particleArea.x * 2
        positions[offset + 1] = particleArea.yMin
        positions[offset + 2] = (Math.random() - 0.5) * particleArea.z * 2
        particleVelocities[i] = 0.5 + Math.random() * 1.5
      }
    }

    particleGeometry.attributes.position.needsUpdate = true
    particleGeometry.attributes.color.needsUpdate = true
  }

  const removeParticle = () => {
    if (!particlePoints) return
    scene.remove(particlePoints)
    particleGeometry.dispose()
    particleMaterial.dispose()
    particleTexture?.dispose()
    particleGeometry = null
    particleMaterial = null
    particleTexture = null
    particleVelocities = null
    particlePoints = null
  }

  return {
    addParticle: spawnParticles,
    removeParticle,
    updateParticles,
  }
}

export const createVisualizationMap = (scene) => {
  const gridOptions = {
    position: new THREE.Vector3(0, 0, 0),
    gridSize: 40,
    gridDivision: 20,
    gridColor: 0x2d4f73,
    shapeSize: 0.5,
    pointSize: 0.1,
    pointColor: 0x2d4f73,
    pointLayout: {
      row: 80,
      col: 80,
    },
  }

  const gridHelper = new THREE.GridHelper(
    gridOptions.gridSize,
    gridOptions.gridDivision,
    gridOptions.gridColor,
    gridOptions.gridColor,
  )
  gridHelper.position.copy(gridOptions.position)
  scene.add(gridHelper)

  const pointsGeometry = new THREE.BufferGeometry()
  const points = []
  for (let i = 0; i < gridOptions.pointLayout.row; i++) {
    for (let j = 0; j < gridOptions.pointLayout.col; j++) {
      const x = (i - gridOptions.pointLayout.row / 2) * gridOptions.shapeSize
      const z = (j - gridOptions.pointLayout.col / 2) * gridOptions.shapeSize
      points.push(x, 0.1, z)
    }
  }

  pointsGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(points, 3),
  )

  const colors = new Float32Array(points.length)
  const baseColor = new THREE.Color(gridOptions.pointColor)
  for (let i = 0; i < colors.length; i += 3) {
    colors[i] = baseColor.r
    colors[i + 1] = baseColor.g
    colors[i + 2] = baseColor.b
  }
  pointsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const pointsMaterial = new THREE.PointsMaterial({
    size: gridOptions.pointSize,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  })

  const pointsSystem = new THREE.Points(pointsGeometry, pointsMaterial)
  pointsSystem.position.copy(gridOptions.position)
  scene.add(pointsSystem)

  const particleSystem = createParticleSystem(scene, {
    particleCount: 30,
    layout: gridOptions.pointLayout,
    shapeSize: gridOptions.shapeSize,
    yMin: 0.1,
    yMax: 4,
    particleColor: 0x69e2f2,
    pointColor: gridOptions.pointColor,
    position: gridOptions.position,
    particleSize: 0.25,
  })

  return {
    addParticle: particleSystem.addParticle,
    removeParticle: particleSystem.removeParticle,
    updateParticles: particleSystem.updateParticles,
    dispose: () => {
      particleSystem.removeParticle()
      scene.remove(gridHelper)
      scene.remove(pointsSystem)
      gridHelper.geometry.dispose()
      gridHelper.material.dispose()
      pointsGeometry.dispose()
      pointsMaterial.dispose()
    },
  }
}
