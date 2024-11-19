<template>
  <div class="rate">
    <div class="title">
      <span style="font-size: 18px; color: white">主要因素</span>
      <div><img src="../../images/dataScreen-title.png" alt="" /></div>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
// 获取节点
let charts = ref()
onMounted(() => {
  let mycharts = echarts.init(charts.value)
  mycharts.setOption({
    legend: {
      top: '20%',
      right: '3%',
      orient: 'vertical',
      align: 'auto',
      textStyle: {
        color: '#F5F5F5',
      },
    },
    // 工具栏
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    series: [
      {
        name: '职业病的主要因素',
        type: 'pie',
        radius: [35, 80],
        center: ['41%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8,
        },
        data: [
          { value: 40, name: '废尘' },
          { value: 38, name: '油烟' },
          { value: 32, name: '化学气体' },
          { value: 30, name: '高温' },
          { value: 28, name: '个人' },
          { value: 26, name: '心理因素' },
          { value: 22, name: '压力' },
          { value: 18, name: '其他' },
        ],
        label: {
          color: 'white',
          formatter: '{b} : {c} ',
        },
      },
    ],
  })
})
</script>
<script lang="ts">
export default {
  name: 'RightDataOne',
}
</script>
<style scoped>
.rate {
  width: 100%;
  height: 33%;
  display: flex;
  flex-direction: column;
  background: url('../../images/dataScreen-main-lb.png') no-repeat;
  background-size: cover;
  .title {
    margin: 15px 0 0 15px;
  }
  .charts {
    height: 100%;
    /* background: red; */
  }
}
</style>
