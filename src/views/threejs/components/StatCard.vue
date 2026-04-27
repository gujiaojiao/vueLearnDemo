<template>
  <div class="stat-card" :class="[`position-${position}`]">
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
    <div class="stat-content">
      <div class="stat-title">{{ title }}</div>
      <div class="stat-value-wrapper">
        <span class="stat-value">{{ displayValue }}</span>
        <span class="stat-unit">{{ unit }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
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

const displayValue = ref('0')

// 格式化显示值
const formatValue = (val: number): string => {
  if (props.decimals > 0) {
    return val.toFixed(props.decimals)
  }
  return Math.round(val).toString()
}

// 数字跳动动画
const animateValue = (target: number) => {
  gsap.to(
    { val: 0 },
    {
      val: target,
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
  width: 8vw;
  min-width: 140px;
  max-width: 180px;
  height: 5vh;
  min-height: 55px;
  max-height: 80px;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.85),
    rgba(15, 35, 60, 0.75)
  );
  border-radius: 4px;
  padding: 0.6rem 0.8rem;
  z-index: 150;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  background-clip: padding-box;
  box-shadow:
    0 0 20px rgba(79, 195, 247, 0.08),
    inset 0 0 30px rgba(79, 195, 247, 0.03);

  // 位置控制 - 两个卡片并排放在HeaderBar下方
  &.position-left {
    top: 8vh;
    left: 1vw;
  }

  &.position-right {
    top: 8vh;
    left: calc(1vw + 8vw + 1vw);
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
    width: 1rem;
    height: 1rem;
    border-top: 2px solid #4fc3f7;
    border-left: 2px solid #4fc3f7;
    border-radius: 4px 0 0 0;
  }

  .corner {
    position: absolute;
    width: 1rem;
    height: 1rem;
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
    gap: 0.3rem;
  }

  .stat-title {
    font-size: clamp(10px, 0.7vw, 13px);
    color: #b0bec5;
    letter-spacing: 0.05rem;
  }

  .stat-value-wrapper {
    display: flex;
    align-items: baseline;
    gap: 0.2rem;
  }

  .stat-value {
    font-size: clamp(20px, 1.5vw, 30px);
    font-weight: 700;
    color: #4fc3f7;
    text-shadow: 0 0 20px rgba(79, 195, 247, 0.5);
    font-family: 'Courier New', monospace;
  }

  .stat-unit {
    font-size: clamp(12px, 0.8vw, 16px);
    color: #b0bec5;
  }
}
</style>
