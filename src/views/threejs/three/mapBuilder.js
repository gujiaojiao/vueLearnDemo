import * as THREE from 'three'
import * as d3 from 'd3'
import { createBarValueLabel, createProvinceLabel } from './mapLabels'

const STYLE = {
  normal: {
    color: 0x223857,
    height: 0.2,
    borderColor: 0x2d4c78,
  },
  jiangsu: {
    color: 0x68b6fe,
    height: 0.5,
  },
}

const getFeatureCenter = (feature, projection) => {
  if (!feature?.geometry) return new THREE.Vector3(0, 0, 0)

  const coordinates =
    feature.geometry.type === 'MultiPolygon'
      ? feature.geometry.coordinates.flat(2)
      : feature.geometry.coordinates.flat(1)

  const points = coordinates.map(([lng, lat]) => {
    const [x, y] = projection([lng, lat])
    return { x, y }
  })

  if (!points.length) return new THREE.Vector3(0, 0, 0)

  const xAverage =
    points.reduce((sum, point) => sum + point.x, 0) / points.length
  const yAverage =
    points.reduce((sum, point) => sum + point.y, 0) / points.length
  return new THREE.Vector3(xAverage, 0, yAverage)
}

const getBarLabelPosition = (cityCenter, barHeight, cityName) => {
  const mapCenter = new THREE.Vector2(1.8, 0.15)
  const cityPoint = new THREE.Vector2(cityCenter.x, cityCenter.z)
  const direction = cityPoint.clone().sub(mapCenter)
  const centralNames = new Set([
    '无锡市',
    '常州市',
    '镇江市',
    '扬州市',
    '泰州市',
    '淮安市',
  ])

  if (direction.lengthSq() < 0.08) {
    const seed = Array.from(cityName).reduce(
      (sum, char) => sum + char.charCodeAt(0),
      0,
    )
    const angle = ((seed % 360) * Math.PI) / 180
    direction.set(Math.cos(angle), Math.sin(angle))
  }

  direction.normalize()
  const preferLeft = direction.x >= 0
  const side = centralNames.has(cityName)
    ? preferLeft
      ? 'left'
      : 'right'
    : direction.x > 0.18
      ? 'right'
      : 'left'

  const laneSeed =
    Array.from(cityName).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 3

  return {
    side,
    position: new THREE.Vector3(
      cityCenter.x + (side === 'left' ? -0.88 : 0.88),
      cityCenter.y +
        barHeight +
        0.6 +
        laneSeed * 0.16 +
        (centralNames.has(cityName) ? 0.08 : 0),
      cityCenter.z + (laneSeed - 1) * 0.22 + direction.y * 0.18,
    ),
  }
}

const createGlowBar = ({
  cityCenter,
  cityName,
  barHeight,
  cityData,
  mapGroup,
  totalEvaluationUnits,
  renderer,
  cityCenters,
}) => {
  const barRadius = 0.1
  const cylinderGeometry = new THREE.CylinderGeometry(
    barRadius,
    barRadius,
    barHeight,
    15,
  )
  const colors = new Float32Array(
    cylinderGeometry.attributes.position.count * 3,
  )
  for (let i = 0; i < cylinderGeometry.attributes.position.count; i++) {
    const y = cylinderGeometry.attributes.position.getY(i)
    const ratio = (y + barHeight / 2) / barHeight
    const mixedColor = new THREE.Color(0x0a3d62).lerp(
      new THREE.Color(0xb2feff),
      ratio,
    )
    colors[i * 3] = mixedColor.r
    colors[i * 3 + 1] = mixedColor.g
    colors[i * 3 + 2] = mixedColor.b
  }
  cylinderGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const cylinderMesh = new THREE.Mesh(
    cylinderGeometry,
    new THREE.MeshBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    }),
  )
  cylinderMesh.position.set(
    cityCenter.x,
    cityCenter.y + barHeight / 2,
    cityCenter.z,
  )
  mapGroup.add(cylinderMesh)

  const glowMesh = new THREE.Mesh(
    new THREE.CylinderGeometry(
      barRadius + 0.05,
      barRadius + 0.05,
      barHeight + 0.1,
      15,
    ),
    new THREE.ShaderMaterial({
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
      depthWrite: false,
    }),
  )
  glowMesh.position.set(
    cityCenter.x,
    cityCenter.y + barHeight / 2,
    cityCenter.z,
  )
  mapGroup.add(glowMesh)

  const baseGeometry = new THREE.RingGeometry(
    barRadius + 0.1,
    barRadius + 0.15,
    30,
    1,
  )
  baseGeometry.rotateX(-Math.PI / 2)
  const baseMesh = new THREE.Mesh(
    baseGeometry,
    new THREE.MeshBasicMaterial({
      color: 0x69e2f2,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
    }),
  )
  baseMesh.position.set(cityCenter.x, cityCenter.y + 0.1, cityCenter.z)
  mapGroup.add(baseMesh)

  const topRingGeometry = new THREE.RingGeometry(
    barRadius,
    barRadius + 0.08,
    24,
    1,
  )
  topRingGeometry.rotateX(-Math.PI / 2)
  const topRingMesh = new THREE.Mesh(
    topRingGeometry,
    new THREE.MeshBasicMaterial({
      color: 0xb2feff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }),
  )
  topRingMesh.position.set(
    cityCenter.x,
    cityCenter.y + barHeight + 0.03,
    cityCenter.z,
  )
  mapGroup.add(topRingMesh)

  const labelLayout = getBarLabelPosition(cityCenter, barHeight, cityName)
  createBarValueLabel({
    cityName,
    layout: labelLayout,
    cityData,
    mapGroup,
    totalEvaluationUnits,
    renderer,
  })

  cityCenters.push({ name: cityName, position: cityCenter.clone() })
}

export const buildChinaMap = async ({
  scene,
  camera,
  renderer,
  cityEvaluationMap,
  totalEvaluationUnits,
  provinceLabels,
  cityMeshes,
  cityCenters,
}) => {
  const [chinaResponse, jiangsuResponse] = await Promise.all([
    fetch(`${import.meta.env.BASE_URL}data/100000_full.json`),
    fetch(`${import.meta.env.BASE_URL}data/320000_full.json`),
  ])
  const chinaGeoJson = await chinaResponse.json()
  const jiangsuCityGeoJson = await jiangsuResponse.json()
  if (!chinaGeoJson?.features || !jiangsuCityGeoJson?.features) return null

  const oldGroup = scene.getObjectByName('provinceGroup')
  if (oldGroup) scene.remove(oldGroup)

  provinceLabels.forEach((label) => label.dispose?.())
  provinceLabels.clear()
  cityMeshes.clear()
  cityCenters.length = 0

  const mapGroup = new THREE.Group()
  mapGroup.name = 'provinceGroup'
  scene.add(mapGroup)

  const projection = d3
    .geoMercator()
    .center([119.84, 32.98])
    .scale(130)
    .translate([2, 0])

  chinaGeoJson.features.forEach((feature) => {
    if (!feature?.geometry) return
    const name = feature.properties?.name || '未知区域'
    const isJiangsu = name === '江苏省'
    const center = getFeatureCenter(feature, projection)
    center.y = isJiangsu ? 0.7 : STYLE.normal.height

    provinceLabels.set(
      name,
      createProvinceLabel({
        name,
        position: center,
        mapGroup,
        camera,
        renderer,
      }),
    )

    const coordinates =
      feature.geometry.type === 'MultiPolygon'
        ? feature.geometry.coordinates.flat(1)
        : feature.geometry.coordinates

    coordinates.forEach((ring) => {
      const points = ring.map(([lng, lat]) => {
        const [x, y] = projection([lng, lat])
        return new THREE.Vector2(x, y)
      })
      if (points.length < 3) return

      const shape = new THREE.Shape(points)
      const geometry = isJiangsu
        ? new THREE.ExtrudeGeometry(shape, {
            depth: STYLE.jiangsu.height,
            bevelEnabled: true,
            bevelThickness: 0.1,
            bevelSize: 0.05,
          })
        : new THREE.ShapeGeometry(shape)
      geometry.rotateX(Math.PI / 2)

      const material = new THREE.MeshLambertMaterial(
        isJiangsu
          ? {
              color: STYLE.jiangsu.color,
              opacity: 0.8,
              transparent: false,
            }
          : {
              color: STYLE.normal.color,
              side: THREE.DoubleSide,
              transparent: false,
            },
      )

      const mesh = new THREE.Mesh(geometry, material)
      mesh.position.y = isJiangsu ? 0.7 : STYLE.normal.height
      mesh.userData = { province: name }
      mapGroup.add(mesh)

      if (!isJiangsu) {
        const border = new THREE.LineSegments(
          new THREE.EdgesGeometry(geometry),
          new THREE.LineBasicMaterial({
            color: STYLE.normal.borderColor,
            linewidth: 1,
            transparent: true,
          }),
        )
        border.position.y = STYLE.normal.height + 0.01
        mapGroup.add(border)
      }
    })
  })

  jiangsuCityGeoJson.features.forEach((cityFeature) => {
    if (!cityFeature?.geometry) return
    const cityName = cityFeature.properties?.name || '未知城市'
    const cityData = cityEvaluationMap.get(cityName)
    if (!cityData) return

    const barHeight = 0.8 + (cityData.total / 186) * 3.4
    const polygonList =
      cityFeature.geometry.type === 'MultiPolygon'
        ? cityFeature.geometry.coordinates
        : [cityFeature.geometry.coordinates]

    polygonList.forEach((polygon) => {
      const ring = polygon[0]
      if (!Array.isArray(ring) || ring.length < 4) return

      const cityCenter = getFeatureCenter(cityFeature, projection)
      cityCenter.y = 0.8

      const linePoints = ring
        .map((point) => {
          if (!Array.isArray(point) || point.length !== 2) return null
          const [lng, lat] = point
          const [x, y] = projection([lng, lat])
          return new THREE.Vector3(x, 0.8, y)
        })
        .filter(Boolean)

      if (linePoints.length < 4) return

      const cityShape = new THREE.Shape(
        linePoints.map((point) => new THREE.Vector2(point.x, point.z)),
      )
      const cityMesh = new THREE.Mesh(
        new THREE.ExtrudeGeometry(cityShape, {
          depth: 0.05,
          bevelEnabled: false,
        }),
        new THREE.MeshLambertMaterial({
          color: 0x96cce5,
          transparent: true,
          opacity: 0.3,
        }),
      )
      cityMesh.geometry.rotateX(Math.PI / 2)
      cityMesh.position.y = STYLE.jiangsu.height + 0.35
      cityMesh.userData = { city: cityName }
      mapGroup.add(cityMesh)

      if (!cityMeshes.has(cityName)) cityMeshes.set(cityName, [])
      cityMeshes.get(cityName).push(cityMesh)

      createGlowBar({
        cityCenter,
        cityName,
        barHeight,
        cityData,
        mapGroup,
        totalEvaluationUnits,
        renderer,
        cityCenters,
      })

      const line = new THREE.LineSegments(
        new THREE.BufferGeometry().setFromPoints(linePoints),
        new THREE.LineBasicMaterial({
          color: 0xffffff,
          linewidth: 2,
          depthTest: true,
        }),
      )
      line.position.y = 0.05
      mapGroup.add(line)
    })
  })

  return mapGroup
}
