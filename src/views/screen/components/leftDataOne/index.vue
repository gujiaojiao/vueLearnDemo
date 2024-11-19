<template>
  <div class="rate">
    <div class="title">
      <span style="font-size: 18px; color: white">职业病占比</span>
      <div><img src="../../images/dataScreen-title.png" alt="" /></div>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import 'echarts-liquidfill'
import { ref, onMounted } from 'vue'
// 获取节点
let charts = ref()
onMounted(() => {
  let mycharts = echarts.init(charts.value)
  mycharts.setOption({
    // title:{},
    // xAxis: {
    //   type: 'category',
    //   data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    // },
    // yAxis: {
    //   type: 'value',
    // },
    series: [
      {
        type: 'liquidFill',
        data: [0.5, 0.4, 0.3],
        color: ['#1569C7', '#2554C7', '#0020C2'],
        itemStyle: {
          opacity: 0.5,
        },
        emphasis: {
          itemStyle: {
            opacity: 0.4,
          },
        },
      },
    ],
    // grid:
  })
})
</script>
<script lang="ts">
export default {
  name: 'LeftDataOne',
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
