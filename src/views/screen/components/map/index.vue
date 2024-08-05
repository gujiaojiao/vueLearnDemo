<template>
  <div class="box" ref="map">地图模块 我是地图组件</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import * as topojson from 'topojson-client'
// 引入上海层级Json数据
import shanghaiJSON from './shanghai.json'
// import chinaJSON from './china.json'
// let map = ref()
// const selectedRegion = ref(null) // 记录当前选择的区域
// let treeData = ref([]) // 存储树形结构数据
// // echarts.registerMap('china', chinaJSON as any)
// // onMounted(() => {
// //   let mychart = echarts.init(map.value)
// //   // 设置配置项
// //   mychart.setOption({
// //     geo: {
// //       map: 'china',
// //       zoom:1.2,
// //     },
// //   })
// // })
// // 先将 TopoJSON 转换成 GeoJSON
// // const geojson = topojson.feature(shanghaiJSON.payload, shanghaiJSON.payload.objects.collection)

// function convertTopoToGeo(topoData: any): any {
//   const geoData = topojson.feature(
//     topoData.payload,
//     topoData.payload.objects.collection,
//   )
//   if (topoData.children) {
//     geoData.features[0].properties.children = {}
//     for (const key in topoData.children) {
//       geoData.features[0].properties.children[key] = convertTopoToGeo(
//         topoData.children[key],
//       )
//     }
//   }
//   return geoData
// }

// const geojson = convertTopoToGeo(shanghaiJSON)
// console.log('GeoJSON:', geojson)

// // 注册上海地图
// echarts.registerMap('shanghai', geojson)
// // onMounted(() => {
// //  // 初始化图表实例
// // let mychart = echarts.init(map.value)

// // 设置配置项
// // mychart.setOption({
// //     geo: {
// //       map: 'shanghai',
// //     },
// //   })
// // })
// // 定义下钻函数
// function drillDownTo(targetRegion: string | null) {
//   const mychart = echarts.init(map.value)
//   mychart.setOption({
//     geo: {
//       map: 'shanghai',
//       roam: true, // 允许用户缩放和平移
//       zoom: 1, // 初始缩放比例
//       label: {
//         show: true,
//         formatter: '{b}', // 显示区域名称
//       },
//       emphasis: {
//         label: {
//           show: true,
//         },
//       },
//       itemStyle: {
//         normal: {
//           areaColor: '#ddd',
//           borderColor: '#aaa',
//         },
//         emphasis: {
//           areaColor: '#aaa',
//         },
//       },
//     },
//     series: [
//       {
//         type: 'map',
//         map: 'shanghai',
//         data: [],
//       },
//     ],
//   })

//   if (targetRegion) {
//     //  const targetGeo = geojson.features.find((feature: any) => feature.properties.name === targetRegion);
//     const targetGeo = geojson.features[0].properties.children[targetRegion]
//     if (targetGeo) {
//       mychart.dispatchAction({
//         type: 'geoRoam',
//         zoom: 2,
//         center: targetGeo.features[0].properties.center,
//       })
//     }
//   }
// }

// // 监听点击事件
// function handleGeoClick(param: any) {
//   console.log('Clicked Region:', param.name)
//   console.log('Click Event Param:', param)

//   const clickedRegion = param.name

//   // 查找点击的区域是否在 children 中
//   const nextTreeData = geojson.features[0].properties.children[clickedRegion]
//   console.log('Next Tree Data:', nextTreeData)

//   if (nextTreeData) {
//     treeData.value = nextTreeData
//     selectedRegion.value = clickedRegion
//     drillDownTo(clickedRegion)
//   } else {
//     selectedRegion.value = null
//     drillDownTo(null)
//   }
//   updateSeriesData()
// }

// onMounted(() => {
//   // 初始化图表实例
//   let mychart = echarts.init(map.value)
//   const seriesData = []
//   // 遍历所有市区，添加到 seriesData 中
//   for (const key in geojson.features[0].properties.children) {
//     const child = geojson.features[0].properties.children[key]
//     seriesData.push({
//       name: child.features[0].properties.name,
//       value: child.features[0].properties.center,
//     })
//   }
//   // 设置配置项
//   mychart.setOption({
//     geo: {
//       map: 'shanghai',
//       roam: true,
//       zoom: 1,
//       label: {
//         show: true,
//         formatter: '{b}',
//       },
//       emphasis: {
//         label: {
//           show: true,
//         },
//       },
//       itemStyle: {
//         normal: {
//           areaColor: '#ddd',
//           borderColor: '#aaa',
//         },
//         emphasis: {
//           areaColor: '#aaa',
//         },
//       },
//     },
//     series: [
//       {
//         type: 'map',
//         map: 'shanghai',
//         data: seriesData,
//       },
//     ],
//   })
//   console.log('seriesData', seriesData)

//   // 添加点击事件处理程序
//   mychart.on('click', handleGeoClick)
// })
// // 更新系列数据
// function updateSeriesData() {
//   const mychart = echarts.getInstanceByDom(map.value)
//   if (!mychart) return

//   const seriesData = []
//   for (const key in geojson.features[0].properties.children) {
//     const child = geojson.features[0].properties.children[key]
//     seriesData.push({
//       name: child.features[0].properties.name,
//       value: child.features[0].properties.center,
//     })
//   }
//   console.log('Series Data:', seriesData)

//   mychart.setOption({
//     series: [
//       {
//         data: seriesData,
//       },
//     ],
//   })
// }
let map = ref()
const selectedRegion = ref(null)
let treeData = ref([])
// interface GeoJSONFeature {
//   type: string
//   properties: {
//     name: string
//     center: [number, number]
//     children?: { [key: string]: GeoJSONFeatureCollection }
//   }
//   geometry: {
//     type: string
//     coordinates: any[]
//   }
// }

// interface GeoJSONFeatureCollection {
//   type: string
//   features: GeoJSONFeature[]
// }
function convertTopoToGeo(topoData: any): any {
  const geoData = topojson.feature(
    topoData.payload,
    topoData.payload.objects.collection,
  )
  if (topoData.children) {
    geoData.features[0].properties.children = {}
    for (const key in topoData.children) {
      geoData.features[0].properties.children[key] = convertTopoToGeo(
        topoData.children[key],
      )
    }
  }
  return geoData
}

const geojson = convertTopoToGeo(shanghaiJSON)
console.log('GeoJSON:', geojson)

echarts.registerMap('shanghai', geojson)

function drillDownTo(targetRegion: string | null) {
  const mychart = echarts.init(map.value)
  mychart.setOption({
    geo: {
      map: 'shanghai',
      roam: true,
      zoom: 1,
      label: {
        show: true,
        formatter: '{b}',
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      itemStyle: {
        normal: {
          areaColor: '#ddd',
          borderColor: '#aaa',
        },
        emphasis: {
          areaColor: '#aaa',
        },
      },
    },
    series: [
      {
        type: 'map',
        map: 'shanghai',
        data: [],
      },
    ],
  })

  if (targetRegion) {
    const targetGeo = geojson.features[0].properties.children[targetRegion]
    if (targetGeo) {
      mychart.dispatchAction({
        type: 'geoRoam',
        zoom: 2,
        center: targetGeo.features[0].properties.center,
      })
    }
  }
}

function handleGeoClick(param: any) {
  console.log('Clicked Region:', param.name)
  console.log('Click Event Param:', param)

  const clickedRegion = param.name

  // 查找点击的区域是否在 children 中
  const nextTreeData = geojson.features[0].properties.children[clickedRegion]
  console.log('Next Tree Data:', nextTreeData)

  if (nextTreeData) {
    treeData.value = nextTreeData
    selectedRegion.value = clickedRegion
    drillDownTo(clickedRegion)
  } else {
    selectedRegion.value = null
    drillDownTo(null)
  }
  updateSeriesData()
}

function updateSeriesData() {
  const mychart = echarts.getInstanceByDom(map.value)
  if (!mychart) return

  const seriesData = []
  for (const key in geojson.features[0].properties.children) {
    const child = geojson.features[0].properties.children[key]
    seriesData.push({
      name: child.features[0].properties.name,
      value: child.features[0].properties.center,
    })
  }
  console.log('Series Data:', seriesData)

  mychart.setOption({
    series: [
      {
        data: seriesData,
      },
    ],
  })
}

onMounted(() => {
  let mychart = echarts.init(map.value)
  const seriesData = []

  // 遍历所有市区，添加到 seriesData 中
  for (const key in geojson.features[0].properties.children) {
    const child = geojson.features[0].properties.children[key]
    seriesData.push({
      name: child.features[0].properties.name,
      value: child.features[0].properties.center,
    })
  }

  mychart.setOption({
    geo: {
      map: 'shanghai',
      roam: true,
      zoom: 1,
      label: {
        show: true,
        formatter: '{b}',
      },
      emphasis: {
        label: {
          show: true,
        },
      },
      itemStyle: {
        normal: {
          areaColor: '#ddd',
          borderColor: '#aaa',
        },
        emphasis: {
          areaColor: '#aaa',
        },
      },
    },
    series: [
      {
        type: 'map',
        map: 'shanghai',
        data: seriesData,
      },
    ],
  })

  mychart.on('click', handleGeoClick)
})
</script>
<script lang="ts">
// 对外暴露Top子组件
export default {
  name: 'Map',
  props: {
    treeData: Array,
  },
}
</script>
<style scoped></style>
