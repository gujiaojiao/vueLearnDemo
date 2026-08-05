# 3D可视化大屏优化实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 为江苏省疫苗接种3D可视化大屏新增标题栏、实时数字卡片、控制面板和趋势折线图，优化整体布局。

**Architecture:** 采用Vue组件化架构，新增4个独立组件(HeaderBar/StatCard/ControlPanel/TrendChart)，在map.vue中统一调用，保持原有3D地图核心地位(80vh)。

**Tech Stack:** Vue 3 + TypeScript + ECharts + GSAP + SCSS

---

## 文件结构

```
src/views/threejs/
├── map.vue                    # 主文件（修改：引入新组件，移除原有控制按钮）
├── mapData.json               # 保持不变
├── areaLevel.json             # 保持不变
└── components/
    ├── RoseChart.vue          # 微调位置（top从3%调整为15%）
    ├── BarChart.vue           # 微调位置（bottom从1%调整为12%）
    ├── HeaderBar.vue          # 新增：标题栏+退出按钮
    ├── StatCard.vue           # 新增：实时数字卡片
    ├── ControlPanel.vue       # 新增：整合控制面板
    └── TrendChart.vue         # 新增：趋势折线图
```

---

## Task 1: 创建 HeaderBar.vue 标题栏组件

**Files:**

- Create: `src/views/threejs/components/HeaderBar.vue`

- [ ] **Step 1: 创建 HeaderBar.vue 文件**

```vue
<template>
  <div class="header-bar">
    <div class="header-title">
      <span class="title-text">江苏省疫苗接种管理可视化平台</span>
      <span class="title-glow"></span>
    </div>
    <button class="exit-btn" @click="handleExit">
      <span class="btn-icon">✕</span>
      <span class="btn-text">退出</span>
      <span class="btn-glow"></span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleExit = () => {
  // 返回上一页或跳转到首页
  router.push('/')
}
</script>

<style scoped lang="scss">
.header-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  background: linear-gradient(
    180deg,
    rgba(8, 18, 38, 0.95) 0%,
    rgba(8, 18, 38, 0.7) 100%
  );
  border-bottom: 1px solid rgba(79, 195, 247, 0.3);
  z-index: 200;
  box-sizing: border-box;

  // 底部渐变光效线条
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(79, 195, 247, 0.8) 20%,
      rgba(79, 195, 247, 1) 50%,
      rgba(79, 195, 247, 0.8) 80%,
      transparent 100%
    );
  }

  .header-title {
    position: relative;
    display: flex;
    align-items: center;

    .title-text {
      font-size: 24px;
      font-weight: 600;
      color: #e0f7fa;
      letter-spacing: 4px;
      text-shadow: 0 0 20px rgba(79, 195, 247, 0.5);
    }

    .title-glow {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 40px;
      background: radial-gradient(
        ellipse at center,
        rgba(79, 195, 247, 0.15) 0%,
        transparent 70%
      );
      pointer-events: none;
    }
  }

  .exit-btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 20px;
    background: transparent;
    border: 1px solid rgba(79, 195, 247, 0.6);
    color: #4fc3f7;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;

    // 科技边框光效
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(
        135deg,
        rgba(79, 195, 247, 0.6) 0%,
        transparent 50%,
        rgba(79, 195, 247, 0.6) 100%
      );
      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
      pointer-events: none;
    }

    .btn-icon {
      font-size: 16px;
      opacity: 0.8;
    }

    .btn-text {
      letter-spacing: 1px;
    }

    .btn-glow {
      position: absolute;
      inset: 0;
      background: rgba(79, 195, 247, 0);
      transition: background 0.3s ease;
      pointer-events: none;
    }

    &:hover {
      color: #fff;
      border-color: rgba(79, 195, 247, 1);

      .btn-glow {
        background: rgba(79, 195, 247, 0.2);
      }

      box-shadow: 0 0 15px rgba(79, 195, 247, 0.4);
    }

    &:active {
      transform: scale(0.98);
    }
  }
}
</style>
```

---

## Task 2: 创建 StatCard.vue 实时数字卡片组件

**Files:**

- Create: `src/views/threejs/components/StatCard.vue`

- [ ] **Step 1: 创建 StatCard.vue 文件**

```vue
<template>
  <div class="stat-card" :class="[`position-${position}`]">
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
    <div class="stat-content">
      <div class="stat-title">{{ title }}</div>
      <div class="stat-value-wrapper">
        <span class="stat-value" ref="valueRef">{{ displayValue }}</span>
        <span class="stat-unit">{{ unit }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { gsap } from 'gsap/gsap-core'

interface Props {
  title: string
  value: number
  unit: string
  position?: 'left' | 'right'
  decimals?: number
}

const props = withDefaults(defineProps<Props>(), {
  position: 'left',
  decimals: 0,
})

const valueRef = ref<HTMLElement>()
const displayValue = ref(0)

// 格式化显示值
const formatValue = (val: number): string => {
  if (props.decimals > 0) {
    return val.toFixed(props.decimals)
  }
  return Math.round(val).toString()
}

// 数字跳动动画
const animateValue = (target: number) => {
  if (!valueRef.value) return

  gsap.fromTo(
    { val: 0 },
    { val: target },
    {
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: function () {
        displayValue.value = formatValue(this.targets()[0].val)
      },
    },
  )
}

onMounted(() => {
  animateValue(props.value)
})

// 监听value变化时重新动画
watch(
  () => props.value,
  (newVal) => {
    animateValue(newVal)
  },
)
</script>

<style scoped lang="scss">
.stat-card {
  position: absolute;
  width: 180px;
  height: 80px;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.85),
    rgba(15, 35, 60, 0.75)
  );
  border-radius: 4px;
  padding: 12px 16px;
  z-index: 150;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  background-clip: padding-box;
  box-shadow:
    0 0 20px rgba(79, 195, 247, 0.08),
    inset 0 0 30px rgba(79, 195, 247, 0.03);

  // 位置控制
  &.position-left {
    top: 70px; // 在HeaderBar下方
    left: 20px;
  }

  &.position-right {
    top: 70px;
    right: 20px;
  }

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
    width: 16px;
    height: 16px;
    border-top: 2px solid #4fc3f7;
    border-left: 2px solid #4fc3f7;
    border-radius: 4px 0 0 0;
  }

  .corner {
    position: absolute;
    width: 16px;
    height: 16px;
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

  .stat-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .stat-title {
    font-size: 12px;
    color: #b0bec5;
    letter-spacing: 1px;
  }

  .stat-value-wrapper {
    display: flex;
    align-items: baseline;
    gap: 4px;
  }

  .stat-value {
    font-size: 28px;
    font-weight: 700;
    color: #4fc3f7;
    text-shadow: 0 0 20px rgba(79, 195, 247, 0.5);
    font-family: 'Courier New', monospace; // 数字使用等宽字体
  }

  .stat-unit {
    font-size: 14px;
    color: #b0bec5;
  }
}
</style>
```

---

## Task 3: 创建 ControlPanel.vue 控制面板组件

**Files:**

- Create: `src/views/threejs/components/ControlPanel.vue`

- [ ] **Step 1: 创建 ControlPanel.vue 文件**

```vue
<template>
  <div class="control-panel">
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
    <div class="panel-title">
      <span>特效控制</span>
    </div>
    <div class="panel-content">
      <button
        class="effect-btn"
        :class="{ active: flyEffectActive }"
        @click="toggleFlyEffect"
      >
        <span class="btn-icon">◈</span>
        <span class="btn-text">飞线特效</span>
        <span class="btn-status">{{ flyEffectActive ? 'ON' : 'OFF' }}</span>
      </button>
      <button
        class="effect-btn"
        :class="{ active: particleEffect }"
        @click="toggleParticleEffect"
      >
        <span class="btn-icon">◆</span>
        <span class="btn-text">粒子特效</span>
        <span class="btn-status">{{ particleEffect ? 'ON' : 'OFF' }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  flyEffectActive: boolean
  particleEffect: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  toggleFlyEffect: []
  toggleParticleEffect: []
}>()

const toggleFlyEffect = () => {
  emit('toggleFlyEffect')
}

const toggleParticleEffect = () => {
  emit('toggleParticleEffect')
}
</script>

<style scoped lang="scss">
.control-panel {
  position: absolute;
  width: 140px;
  top: 160px; // 在StatCard下方
  right: 20px;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.9),
    rgba(15, 35, 60, 0.8)
  );
  border-radius: 4px;
  padding: 12px;
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
    width: 16px;
    height: 16px;
    border-top: 2px solid #4fc3f7;
    border-left: 2px solid #4fc3f7;
    border-radius: 4px 0 0 0;
  }

  .corner {
    position: absolute;
    width: 16px;
    height: 16px;
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

  .panel-title {
    flex-shrink: 0;
    text-align: center;
    padding-bottom: 8px;
    margin-bottom: 10px;
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
      font-size: 13px;
      color: #e0f7fa;
      font-weight: 500;
      letter-spacing: 2px;
    }
  }

  .panel-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .effect-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 12px;
    background: transparent;
    border: 1px solid rgba(79, 195, 247, 0.4);
    color: #4fc3f7;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;

    .btn-icon {
      font-size: 14px;
      opacity: 0.7;
    }

    .btn-text {
      flex: 1;
      text-align: center;
      letter-spacing: 1px;
    }

    .btn-status {
      font-size: 10px;
      opacity: 0.6;
      font-weight: 600;
    }

    &:hover {
      border-color: rgba(79, 195, 247, 0.8);
      box-shadow: 0 0 10px rgba(79, 195, 247, 0.2);
    }

    &.active {
      background: rgba(79, 195, 247, 0.2);
      border-color: #4fc3f7;
      color: #fff;
      box-shadow: 0 0 15px rgba(79, 195, 247, 0.3);

      .btn-status {
        color: #4fc3f7;
        opacity: 1;
      }
    }
  }
}
</style>
```

---

## Task 4: 创建 TrendChart.vue 趋势折线图组件

**Files:**

- Create: `src/views/threejs/components/TrendChart.vue`

- [ ] **Step 1: 创建 TrendChart.vue 文件**

```vue
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
  width: clamp(360px, 22vw, 400px);
  height: clamp(240px, 15vh, 280px);
  bottom: 20px;
  right: 20px;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.9),
    rgba(15, 35, 60, 0.8)
  );
  border-radius: 4px;
  padding: 12px;
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
    width: 20px;
    height: 20px;
    border-top: 2px solid #4fc3f7;
    border-left: 2px solid #4fc3f7;
    border-radius: 4px 0 0 0;
  }

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
</style>
```

---

## Task 5: 修改 RoseChart.vue 和 BarChart.vue 位置

**Files:**

- Modify: `src/views/threejs/components/RoseChart.vue:156-158`
- Modify: `src/views/threejs/components/BarChart.vue:176-178`

- [ ] **Step 1: 修改 RoseChart.vue 的 top 位置**

将 `top: 3%` 改为 `top: 15%`，避免与 HeaderBar 和 StatCard 重叠：

```scss
// 原代码 (line 156-158)
top: 3%;
left: 20px;

// 修改为
top: 15%;
left: 20px;
```

- [ ] **Step 2: 修改 BarChart.vue 的 bottom 位置**

将 `bottom: 1%` 改为 `bottom: 12%`，确保与底部有合理间距：

```scss
// 原代码 (line 176-178)
bottom: 1%;
left: 20px;

// 修改为
bottom: 12%;
left: 20px;
```

---

## Task 6: 修改 map.vue 主文件

**Files:**

- Modify: `src/views/threejs/map.vue`

- [ ] **Step 1: 在 template 中引入新组件并移除原有控制按钮**

替换 `<div class="mapWeb">` 内的内容：

```vue
<template>
  <div class="container" ref="container">
    <!-- 标题栏 -->
    <HeaderBar />

    <!-- 实时数字卡片 -->
    <StatCard title="接种单位总数" :value="1102" unit="家" position="left" />
    <StatCard
      title="平均完成率"
      :value="92.3"
      unit="%"
      position="right"
      :decimals="1"
    />

    <div class="mapWeb" ref="mapWeb">
      <!-- ECharts 玫瑰图组件 -->
      <RoseChart />
      <!-- ECharts 柱状图组件 -->
      <BarChart />
      <!-- 控制面板 -->
      <ControlPanel
        :flyEffectActive="flyEffectActive"
        :particleEffect="particleEffect"
        @toggleFlyEffect="addEffect"
        @toggleParticleEffect="addParticle"
      />
      <!-- 趋势折线图 -->
      <TrendChart />
    </div>
  </div>
</template>
```

- [ ] **Step 2: 在 script setup 中添加组件导入**

在导入语句区域添加：

```typescript
// 导入 ECharts 玫瑰图组件
import RoseChart from './components/RoseChart.vue'
// 导入 ECharts 柱状图组件
import BarChart from './components/BarChart.vue'
// 导入新增组件
import HeaderBar from './components/HeaderBar.vue'
import StatCard from './components/StatCard.vue'
import ControlPanel from './components/ControlPanel.vue'
import TrendChart from './components/TrendChart.vue'
```

- [ ] **Step 3: 移除原有的 addContent 控制按钮区域**

删除 template 中的 `<div class="addContent">` 部分（约 line 11-25）：

```vue
<!-- 删除这部分 -->
<div class="addContent">
  <span>增加3D特效</span>
  <el-button
    :class="flyEffectActive ? 'activeButton' : ''"
    @click="addEffect"
  >
    飞线特效
  </el-button>
  <el-button
    :class="particleEffect ? 'activeButton' : ''"
    @click="addParticle"
  >
    粒子特效
  </el-button>
</div>
```

- [ ] **Step 4: 移除 style 中原有的 addContent 样式**

删除 `<style scoped lang="scss">` 中的 `.addContent` 样式块（约 line 1563-1584）：

```scss
<!-- 删除这部分 -- > .addContent {
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  color: #fff;
  z-index: 10;
  width: 120px;
  text-align: center;
  .el-button {
    display: block;
    margin: 25px 0;
    width: 100%;
    background: transparent;
    border: 1px solid #409eff;
    color: #409eff;
  }
  .activeButton {
    background: #409eff;
    color: #fff;
  }
}
```

- [ ] **Step 5: 移除 style 中原有的 returnBack 样式（已注释，可删除）**

删除 `.returnBack` 样式块：

```scss
<!-- 删除这部分 -- > .returnBack {
  position: absolute;
  top: 2%;
  left: 3%;
  .el-button {
    background: transparent;
    border: 1px solid cyan;
    color: cyan;
  }
}
```

---

## Task 7: 测试与验证

- [ ] **Step 1: 启动开发服务器**

运行: `npm run dev` 或 `pnpm dev`
预期: 项目启动成功，访问 http://localhost:端口/threejs/map

- [ ] **Step 2: 验证页面显示**

检查项目:

- HeaderBar 显示在顶部，标题正确，退出按钮可点击
- StatCard 左右对称显示，数字有跳动动画
- RoseChart 和 BarChart 位置正确，不与顶部卡片重叠
- ControlPanel 显示在右侧，按钮状态正确
- TrendChart 显示在右下角，折线图正常
- 3D地图居中，飞线/粒子特效开关功能正常

- [ ] **Step 3: 验证交互功能**

- 点击退出按钮 → 返回首页
- 点击飞线特效按钮 → 特效开启/关闭正常
- 点击粒子特效按钮 → 特效开启/关闭正常
- hover 各图表 → tooltip 显示正常

- [ ] **Step 4: 验证响应式布局**

调整浏览器窗口大小，检查各组件位置和尺寸是否正确调整。

---

## Self-Review Checklist

**1. Spec coverage:**

- ✅ HeaderBar 组件：Task 1
- ✅ StatCard 组件：Task 2
- ✅ ControlPanel 组件：Task 3
- ✅ TrendChart 组件：Task 4
- ✅ RoseChart/BarChart 位置调整：Task 5
- ✅ map.vue 主文件整合：Task 6
- ✅ 测试验证：Task 7

**2. Placeholder scan:**

- ✅ 无 "TBD" 或 "TODO"
- ✅ 每个步骤都有完整代码
- ✅ 无模糊描述

**3. Type consistency:**

- ✅ Props 类型在各组件中一致
- ✅ 事件名称一致 (toggleFlyEffect, toggleParticleEffect)
- ✅ 组件导入路径一致
