<template>
  <div class="rose-chart-container">
    <!-- 四角装饰 -->
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
    <div class="chart-title">
      <span>江苏省13市接种单位数量</span>
    </div>
    <div class="chart-wrapper" ref="chartRef"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

const chartRef = ref<HTMLElement>()
let chartInstance: echarts.ECharts | null = null

// Mock数据：江苏13市接种单位数量
const mockData = [
  { name: '南京市', value: 186 },
  { name: '苏州市', value: 152 },
  { name: '无锡市', value: 128 },
  { name: '常州市', value: 95 },
  { name: '南通市', value: 88 },
  { name: '徐州市', value: 76 },
  { name: '扬州市', value: 65 },
  { name: '盐城市', value: 58 },
  { name: '泰州市', value: 52 },
  { name: '镇江市', value: 45 },
  { name: '淮安市', value: 42 },
  { name: '连云港市', value: 38 },
  { name: '宿迁市', value: 32 },
]

// 根据容器尺寸计算图表配置
const getChartOptions = (width: number, height: number) => {
  // 基于容器最小边计算基准值，预留 label 空间
  const baseSize = Math.min(width, height) * 0.9 // 收缩到 75%
  const fontSize = Math.max(8, Math.min(11, baseSize / 30))
  const radiusInner = baseSize * 0.08
  const radiusOuter = baseSize * 0.4

  return {
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br/>接种单位: {c} 家 ({d}%)',
      backgroundColor: 'rgba(10, 20, 40, 0.9)',
      borderColor: '#4fc3f7',
      borderWidth: 1,
      textStyle: { color: '#fff', fontSize: fontSize },
      confine: true,
    },
    series: [
      {
        name: '接种单位',
        type: 'pie',
        radius: [radiusInner, radiusOuter],
        center: ['50%', '52%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 3,
          borderColor: 'rgba(10, 20, 40, 0.6)',
          borderWidth: 1,
        },
        label: {
          show: true,
          formatter: '{b}\n{c}家',
          fontSize: fontSize,
          color: '#e0f7fa',
        },
        labelLine: {
          length: fontSize * 0.6,
          length2: fontSize * 0.9,
          lineStyle: { color: '#4fc3f7' },
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(79, 195, 247, 0.4)',
          },
        },
        data: mockData.map((item, i) => ({
          ...item,
          itemStyle: { color: colors[i % colors.length] },
        })),
      },
    ],
  }
}

const colors = [
  '#4fc3f7',
  '#29b6f6',
  '#03a9f4',
  '#039be5',
  '#0288d1',
  '#0277bd',
  '#01579b',
  '#4dd0e1',
  '#26c6da',
  '#00bcd4',
  '#00acc1',
  '#0097a7',
  '#00838f',
]

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
export default { name: 'RoseChart' }
</script>

<style scoped lang="scss">
.rose-chart-container {
  position: absolute;
  width: clamp(350px, 20vw, 450px);
  height: clamp(320px, 20vh, 450px);
  top: 3%;
  left: 20px;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.9),
    rgba(15, 35, 60, 0.8)
  );
  border-radius: 4px;
  padding: 12px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  // 科技感边框
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
    width: 20px;
    height: 20px;
    border-top: 2px solid #4fc3f7;
    border-left: 2px solid #4fc3f7;
    border-radius: 4px 0 0 0;
  }

  // 角落装饰容器
  .corner {
    position: absolute;
    width: 20px;
    height: 20px;
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
    padding-bottom: 8px;
    margin-bottom: 8px;
    position: relative;

    // 标题下方的科技线条
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
      font-size: 14px;
      color: #e0f7fa;
      font-weight: 500;
      letter-spacing: 2px;
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

// // 移动端
// @media (max-width: 768px) {
//   .rose-chart-container {
//     width: 85vw;
//     max-width: 280px;
//     height: 280px;
//     left: 50%;
//     transform: translateX(-50%);

//     .chart-title span {
//       font-size: 12px;
//     }
//   }
// }

// // 平板/小屏
// @media (min-width: 769px) and (max-width: 1200px) {
//   .rose-chart-container {
//     width: clamp(260px, 22vw, 320px);
//     height: clamp(300px, 22vh, 360px);

//     .chart-title span {
//       font-size: 13px;
//     }
//   }
// }

// // 大屏
// @media (min-width: 1600px) {
//   .rose-chart-container {
//     width: clamp(350px, 18vw, 420px);
//     height: clamp(340px, 18vh, 450px);

//     .chart-title span {
//       font-size: 15px;
//     }
//   }
// }
</style>
