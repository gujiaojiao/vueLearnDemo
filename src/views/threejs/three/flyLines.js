import * as THREE from 'three'

export const createFlyLineController = ({ getMapGroup, getCityCenters }) => {
  let flyLineGroup = null
  let flyLines = []

  const remove = () => {
    if (!flyLineGroup) return

    flyLines.forEach((item) => {
      item.line.geometry.dispose()
      item.line.material.dispose()
      item.comet.material.map?.dispose()
      item.comet.material.dispose()
    })

    const mapGroup = getMapGroup()
    if (mapGroup) {
      mapGroup.remove(flyLineGroup)
    }

    flyLineGroup = null
    flyLines = []
  }

  const create = (count = 8) => {
    const cityCenters = getCityCenters()
    const mapGroup = getMapGroup()
    if (!mapGroup || cityCenters.length < 2) return

    remove()
    flyLineGroup = new THREE.Group()
    flyLineGroup.name = 'flyLineGroup'
    mapGroup.add(flyLineGroup)

    for (let i = 0; i < count; i++) {
      const startNode =
        cityCenters[Math.floor(Math.random() * cityCenters.length)]
      const endNode =
        cityCenters[Math.floor(Math.random() * cityCenters.length)]
      if (!startNode || !endNode || startNode === endNode) continue

      const start = startNode.position.clone()
      const end = endNode.position.clone()
      const mid = start.clone().lerp(end, 0.5)
      mid.y += 3 + Math.random() * 3

      const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
      const geometry = new THREE.BufferGeometry().setFromPoints(
        curve.getPoints(80),
      )
      const line = new THREE.Line(
        geometry,
        new THREE.LineBasicMaterial({ color: 0x69e2f2 }),
      )
      flyLineGroup.add(line)

      const canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      const ctx = canvas.getContext('2d')
      const gradient = ctx.createRadialGradient(32, 32, 2, 32, 32, 30)
      gradient.addColorStop(0, 'rgba(255,255,255,1)')
      gradient.addColorStop(0.2, 'rgba(105,226,242,1)')
      gradient.addColorStop(1, 'rgba(105,226,242,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 64, 64)

      const texture = new THREE.CanvasTexture(canvas)
      const comet = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: texture,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
      comet.scale.set(0.6, 0.6, 1)
      flyLineGroup.add(comet)

      flyLines.push({
        curve,
        line,
        comet,
        speed: 0.2 + Math.random() * 0.6,
        progress: Math.random(),
      })
    }
  }

  const update = (deltaTime) => {
    if (!flyLines.length) return

    flyLines.forEach((item) => {
      item.progress += item.speed * deltaTime * 0.3
      if (item.progress > 1) item.progress -= 1

      const position = item.curve.getPointAt(item.progress)
      item.comet.position.copy(position)
      const scale = 0.4 + Math.sin(item.progress * Math.PI * 2) * 0.18
      item.comet.scale.set(scale, scale, 1)
    })
  }

  return { create, remove, update, dispose: remove }
}
