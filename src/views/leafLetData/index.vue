<template>
  <div>
    <div id="map" class="map-container"></div>
    <div class="returnBack">
      <el-button type="primary" :icon="Back" @click="returnBack()">
        返回
      </el-button>
    </div>
  </div>
</template>
<script lang="ts">
// 定义组件名称
import { Back } from '@element-plus/icons-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  // 定义组件tag标签
  name: 'initMap',
  // 定义组件label，首页使用
  labelName: '初始化地图',
  componentIndex: 1,
})
</script>
<script setup lang="ts">
import { onMounted, registerRuntimeCompiler } from 'vue'
import L from 'leaflet'
import { useRouter } from 'vue-router'

const router = useRouter()

let map: L.Map | null = null

onMounted(() => {
  map = initMap()
})

/**
 * Todo 初始化地图
 */
const initMap = () => {
  // 初始化地图实例，设置中心坐标和缩放级别
  let map: L.Map = L.map('map').setView([39.90002, 116.46], 10)
  // 天地图key
  const mapKey = '37d883978b54bc12f58d30492062d574'
  // 添加底图瓦片层（以天地图为例）
  L.tileLayer(
    `http://t{s}.tianditu.gov.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=${mapKey}`,
    {
      maxZoom: 13,
      // 子域名
      subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
    },
  ).addTo(map)

  //   L.tileLayer(
  //     `http://t{s}.tianditu.gov.cn/cva_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cva&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles&tk=${mapKey}`,
  //     {
  //       maxZoom: 19,
  //       // 子域名
  //       subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'],
  //     },
  //   ).addTo(map)

  return map
}

const returnBack = () => {
  router.push('/')
}
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
