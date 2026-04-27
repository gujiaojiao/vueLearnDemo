<template>
  <div class="trend-chart-container">
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
    <div class="chart-title">
      <span>接种单位数量趋势</span>
    </div>
    <div class="chart-wrapper" ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const chartRef = ref<HTMLElement>()
let chartInstance: echarts.ECharts | null = null

// Mock数据：近12个月接种单位数量趋势
const trendData = [
  { month: '2025-05', count: 980, label: '5月' },
  { month: '2025-06', count: 995, label: '6月' },
  { month: '2025-07', count: 1010, label: '7月' },
  { month: '2025-08', count: 1025, label: '8月' },
  { month: '2025-09', count: 1038, label: '9月' },
  { month: '2025-10', count: 1050, label: '10月' },
  { month: '2025-11', count: 1062, label: '11月' },
  { month: '2025-12', count: 1075, label: '12月' },
  { month: '2026-01', count: 1085, label: '1月' },
  { month: '2026-02', count: 1092, label: '2月' },
  { month: '2026-03', count: 1098, label: '3月' },
  { month: '2026-04', count: 1102, label: '4月' },
]

const getChartOptions = (width: number, height: number) => {
  const baseFontSize = Math.max(10, Math.min(12, height / 25))

  return {
    tooltip: {
      trigger: 'axis',
      formatter: (params: any) => {
        const data = params[0]
        const item = trendData.find((d) => d.month === data.name)
        if (!item) return ''
        return `
          <div style="padding: 6px 10px;">
            <div style="font-weight: bold; color: #e0f7fa;">${item.label}</div>
            <div style="color: #4fc3f7;">接种单位: ${data.value} 家</div>
          </div>
        `
      },
      backgroundColor: 'rgba(10, 20, 40, 0.9)',
      borderColor: '#4fc3f7',
      borderWidth: 1,
      textStyle: { color: '#fff', fontSize: baseFontSize },
    },
    grid: {
      left: '8%',
      right: '5%',
      top: '15%',
      bottom: '18%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: trendData.map((d) => d.month),
      axisLine: {
        lineStyle: { color: 'rgba(79, 195, 247, 0.3)' },
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#b0bec5',
        fontSize: baseFontSize - 1,
        formatter: (value: string) => {
          const item = trendData.find((d) => d.month === value)
          return item ? item.label : value
        },
        interval: 0,
        rotate: 30,
      },
    },
    yAxis: {
      type: 'value',
      min: 950,
      max: 1150,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#b0bec5',
        fontSize: baseFontSize - 1,
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(79, 195, 247, 0.1)',
          type: 'dashed',
        },
      },
    },
    series: [
      {
        name: '接种单位',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 6,
        data: trendData.map((d) => d.count),
        lineStyle: {
          color: '#4fc3f7',
          width: 2,
        },
        itemStyle: {
          color: '#4fc3f7',
          borderColor: '#fff',
          borderWidth: 1,
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(79, 195, 247, 0.4)' },
            { offset: 1, color: 'rgba(79, 195, 247, 0.05)' },
          ]),
        },
        emphasis: {
          focus: 'series',
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(79, 195, 247, 0.5)',
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
export default { name: 'TrendChart' }
</script>

<style scoped lang="scss">
.trend-chart-container {
  position: absolute;
  width: 18vw;
  min-width: 280px;
  max-width: 350px;
  height: 24vh;
  min-height: 210px;
  max-height: 280px;
  top: 21vh;
  right: 1vw;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.9),
    rgba(15, 35, 60, 0.8)
  );
  border-radius: 4px;
  padding: 0.7rem;
  z-index: 150;
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

@media (max-width: 1440px) {
  .trend-chart-container {
    width: 20vw;
  }
}
</style>
