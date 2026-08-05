<template>
  <div class="bar-chart-container">
    <!-- 四角装饰 -->
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
    <div class="chart-title">
      <span>各市指标评价完成率</span>
    </div>
    <div class="chart-wrapper" ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const chartRef = ref<HTMLElement>()
let chartInstance: echarts.ECharts | null = null

// Mock数据：江苏13市指标评价完成情况
const mockData = [
  { name: '南京市', total: 186, completed: 178, rate: 95.7 },
  { name: '苏州市', total: 152, completed: 142, rate: 93.4 },
  { name: '无锡市', total: 128, completed: 118, rate: 92.2 },
  { name: '常州市', total: 95, completed: 88, rate: 92.6 },
  { name: '南通市', total: 88, completed: 85, rate: 96.6 },
  { name: '徐州市', total: 76, completed: 68, rate: 89.5 },
  { name: '扬州市', total: 65, completed: 62, rate: 95.4 },
  { name: '盐城市', total: 58, completed: 52, rate: 89.7 },
  { name: '泰州市', total: 52, completed: 48, rate: 92.3 },
  { name: '镇江市', total: 45, completed: 44, rate: 97.8 },
  { name: '淮安市', total: 42, completed: 38, rate: 90.5 },
  { name: '连云港市', total: 38, completed: 32, rate: 84.2 },
  { name: '宿迁市', total: 32, completed: 28, rate: 87.5 },
].sort((a, b) => b.rate - a.rate) // 按完成率降序排列

// 根据完成率获取颜色
const getRateColor = (rate: number) => {
  if (rate >= 95) return '#4fc3f7' // 亮青色 - 优秀
  if (rate >= 90) return '#29b6f6' // 蓝色 - 良好
  if (rate >= 85) return '#0288d1' // 深蓝 - 合格
  return '#01579b' // 暗蓝 - 待提升
}

const getChartOptions = (width: number, height: number) => {
  const baseFontSize = Math.max(10, Math.min(12, height / 32))

  return {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      formatter: (params: any) => {
        const data = params[0]
        const item = mockData.find((d) => d.name === data.name)
        if (!item) return ''
        return `
          <div style="padding: 4px 8px;">
            <div style="font-weight: bold; margin-bottom: 4px;">${item.name}</div>
            <div>参评单位: ${item.total} 家</div>
            <div>完成评价: ${item.completed} 家</div>
            <div style="color: #4fc3f7;">评价完成率: ${item.rate}%</div>
          </div>
        `
      },
      backgroundColor: 'rgba(10, 20, 40, 0.9)',
      borderColor: '#4fc3f7',
      borderWidth: 1,
      textStyle: { color: '#fff', fontSize: baseFontSize },
    },
    grid: {
      left: '3%',
      right: '12%',
      top: '3%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      max: 100,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: { show: false },
    },
    yAxis: {
      type: 'category',
      data: mockData.map((d) => d.name),
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#b0bec5',
        fontSize: baseFontSize,
        margin: 8,
      },
      inverse: true, // 高完成率在上
    },
    series: [
      {
        name: '评价完成率',
        type: 'bar',
        barWidth: '50%',
        data: mockData.map((d) => ({
          value: d.rate,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: 'rgba(79, 195, 247, 0.3)' },
              { offset: 1, color: getRateColor(d.rate) },
            ]),
            borderRadius: [0, 2, 2, 0],
          },
        })),
        label: {
          show: true,
          position: 'right',
          formatter: '{c}%',
          fontSize: baseFontSize,
          color: '#e0f7fa',
          distance: 6,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(79, 195, 247, 0.4)',
          },
        },
      },
    ],
  }
}

const initChart = () => {
  if (!chartRef.value) return
  chartInstance = echarts.init(chartRef.value, undefined, {
    renderer: 'canvas',
  })
  updateChart()
}

const updateChart = () => {
  if (!chartInstance || !chartRef.value) return
  const rect = chartRef.value.getBoundingClientRect()
  const options = getChartOptions(rect.width, rect.height)
  chartInstance.setOption(options)
  chartInstance.resize()
}

const handleResize = () => {
  if (!chartInstance) return
  updateChart()
}

onMounted(() => {
  nextTick(() => {
    initChart()
    window.addEventListener('resize', handleResize)
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (chartInstance) {
    chartInstance.dispose()
    chartInstance = null
  }
})
</script>

<script lang="ts">
export default { name: 'BarChart' }
</script>

<style scoped lang="scss">
.bar-chart-container {
  position: absolute;
  width: 20vw;
  min-width: 280px;
  max-width: 380px;
  height: 40vh;
  min-height: 260px;
  max-height: 360px;
  top: 55vh;
  left: 1vw;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.9),
    rgba(15, 35, 60, 0.8)
  );
  border-radius: 4px;
  padding: 0.7rem;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  background-clip: padding-box;
  box-shadow:
    0 0 20px rgba(79, 195, 247, 0.08),
    inset 0 0 30px rgba(79, 195, 247, 0.03);

  // 渐变边框效果
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 4px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(79, 195, 247, 0.5) 0%,
      rgba(79, 195, 247, 0.1) 30%,
      transparent 50%,
      rgba(79, 195, 247, 0.1) 70%,
      rgba(79, 195, 247, 0.4) 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }

  // 左上角装饰
  &::after {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    width: 1.2rem;
    height: 1.2rem;
    border-top: 2px solid #4fc3f7;
    border-left: 2px solid #4fc3f7;
    border-radius: 4px 0 0 0;
  }

  .corner {
    position: absolute;
    width: 1.2rem;
    height: 1.2rem;
    pointer-events: none;

    &.tr {
      top: -1px;
      right: -1px;
      border-top: 2px solid #4fc3f7;
      border-right: 2px solid #4fc3f7;
      border-radius: 0 4px 0 0;
    }

    &.bl {
      bottom: -1px;
      left: -1px;
      border-bottom: 2px solid #4fc3f7;
      border-left: 2px solid #4fc3f7;
      border-radius: 0 0 0 4px;
    }

    &.br {
      bottom: -1px;
      right: -1px;
      border-bottom: 2px solid #4fc3f7;
      border-right: 2px solid #4fc3f7;
      border-radius: 0 0 4px 0;
    }
  }

  .chart-title {
    flex-shrink: 0;
    text-align: center;
    padding-bottom: 0.4rem;
    margin-bottom: 0.4rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60%;
      height: 1px;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(79, 195, 247, 0.6),
        transparent
      );
    }

    span {
      font-size: clamp(12px, 0.85vw, 15px);
      color: #e0f7fa;
      font-weight: 500;
      letter-spacing: 0.1rem;
      text-shadow: 0 0 10px rgba(79, 195, 247, 0.3);
    }
  }

  .chart-wrapper {
    flex: 1;
    width: 100%;
    min-height: 0;
    overflow: hidden;
  }
}
</style>
