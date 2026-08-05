<template>
  <div class="warning-table-container">
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>

    <div class="panel-title">
      <span>重点问题整改跟踪</span>
    </div>

    <div class="panel-subtitle">
      <span class="city-chip">{{ currentCity }}</span>
      <span class="summary-chip warning">逾期 {{ warningCount }}</span>
      <span class="summary-chip follow">整改中 {{ followCount }}</span>
      <span class="summary-chip status">
        {{ shouldAutoRotate ? '自动巡检' : '整改清单' }}
      </span>
    </div>

    <div class="table-header">
      <span>城市 / 评价对象</span>
      <span>综合得分</span>
      <span>整改状态</span>
    </div>

    <div
      class="table-body"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
    >
      <transition-group name="row-shift" tag="div" class="rows-wrapper">
        <div
          v-for="(item, index) in visibleRows"
          :key="item.city + item.unit + index"
          class="table-row"
        >
          <div class="row-glow"></div>
          <div class="unit-info">
            <span class="city">
              <i class="city-dot"></i>
              {{ item.city }}
            </span>
            <span class="unit">{{ item.unit }}</span>
          </div>
          <div class="progress-cell">
            <span class="rate">{{ item.rate }}%</span>
            <span class="delta" :class="item.delta >= 0 ? 'up' : 'down'">
              {{ item.delta >= 0 ? '+' : '' }}{{ item.delta }}%
            </span>
          </div>
          <div class="status-cell">
            <span class="status-tag" :class="item.statusClass">
              {{ item.statusText }}
            </span>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface WarningRow {
  city: string
  unit: string
  rate: number
  delta: number
  statusText: string
  statusClass: 'warning' | 'follow' | 'normal'
}

interface Props {
  rows: WarningRow[]
  activeCity?: string
}

const props = withDefaults(defineProps<Props>(), {
  activeCity: '全省',
})

const visibleCount = 5
const rotateInterval = 2400
const currentIndex = ref(0)
const isPaused = ref(false)
let timer: number | null = null

const severityOrder = {
  warning: 0,
  follow: 1,
  normal: 2,
}

const currentCity = computed(() => props.activeCity || '全省')

const filteredRows = computed(() => {
  if (!props.activeCity || props.activeCity === '全省') {
    return props.rows
  }

  const matched = props.rows.filter((item) => item.city === props.activeCity)
  return matched.length ? matched : props.rows
})

const orderedRows = computed(() => {
  return [...filteredRows.value].sort((a, b) => {
    const statusDiff =
      severityOrder[a.statusClass] - severityOrder[b.statusClass]
    if (statusDiff !== 0) return statusDiff
    return a.rate - b.rate
  })
})

const shouldAutoRotate = computed(() => orderedRows.value.length > visibleCount)

const visibleRows = computed(() => {
  if (orderedRows.value.length <= visibleCount) {
    return orderedRows.value
  }

  return Array.from({ length: visibleCount }, (_, index) => {
    const rowIndex = (currentIndex.value + index) % orderedRows.value.length
    return orderedRows.value[rowIndex]
  })
})

const warningCount = computed(
  () =>
    filteredRows.value.filter((item) => item.statusClass === 'warning').length,
)

const followCount = computed(
  () =>
    filteredRows.value.filter((item) => item.statusClass === 'follow').length,
)

const startRotate = () => {
  stopRotate()
  if (!shouldAutoRotate.value) return

  timer = window.setInterval(() => {
    if (isPaused.value || !orderedRows.value.length) return
    currentIndex.value = (currentIndex.value + 1) % orderedRows.value.length
  }, rotateInterval)
}

const stopRotate = () => {
  if (timer !== null) {
    window.clearInterval(timer)
    timer = null
  }
}

watch(
  () => props.activeCity,
  () => {
    currentIndex.value = 0
    startRotate()
  },
)

watch(
  orderedRows,
  () => {
    currentIndex.value = 0
    startRotate()
  },
  { deep: true },
)

onMounted(() => {
  startRotate()
})

onBeforeUnmount(() => {
  stopRotate()
})
</script>

<script lang="ts">
export default { name: 'WarningTable' }
</script>

<style scoped lang="scss">
.warning-table-container {
  position: absolute;
  right: 1vw;
  bottom: 4vh;
  width: 18vw;
  min-width: 280px;
  max-width: 350px;
  height: 45vh;
  min-height: 290px;
  max-height: 380px;
  padding: 0.85rem 0.9rem 0.95rem;
  z-index: 150;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: 4px;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.94),
    rgba(15, 35, 60, 0.84)
  );
  background-clip: padding-box;
  box-shadow:
    0 0 22px rgba(79, 195, 247, 0.09),
    inset 0 0 30px rgba(79, 195, 247, 0.04);
  backdrop-filter: blur(4px);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    border-radius: 4px;
    background: linear-gradient(
      135deg,
      rgba(79, 195, 247, 0.45) 0%,
      rgba(79, 195, 247, 0.08) 28%,
      transparent 50%,
      rgba(79, 195, 247, 0.08) 72%,
      rgba(79, 195, 247, 0.42) 100%
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
      right: -1px;
      bottom: -1px;
      border-right: 2px solid #4fc3f7;
      border-bottom: 2px solid #4fc3f7;
      border-radius: 0 0 4px 0;
    }
  }

  .panel-title {
    position: relative;
    margin-bottom: 0.45rem;
    padding-bottom: 0.45rem;
    text-align: center;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 64%;
      height: 1px;
      transform: translateX(-50%);
      background: linear-gradient(
        90deg,
        transparent,
        rgba(79, 195, 247, 0.65),
        transparent
      );
    }

    span {
      color: #e0f7fa;
      font-size: clamp(12px, 0.82vw, 15px);
      font-weight: 600;
      letter-spacing: 0.1rem;
      text-shadow: 0 0 10px rgba(79, 195, 247, 0.25);
    }
  }

  .panel-subtitle {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.7rem;
    flex-wrap: wrap;
  }

  .city-chip,
  .summary-chip {
    padding: 0.18rem 0.5rem;
    border: 1px solid rgba(79, 195, 247, 0.25);
    font-size: clamp(10px, 0.65vw, 12px);
    letter-spacing: 0.04rem;
    background: rgba(79, 195, 247, 0.08);
  }

  .city-chip {
    color: #d8f7ff;
  }

  .summary-chip.warning {
    color: #ffd27a;
    border-color: rgba(255, 191, 73, 0.35);
    background: rgba(255, 191, 73, 0.1);
  }

  .summary-chip.follow {
    color: #72d9ff;
    border-color: rgba(114, 217, 255, 0.3);
  }

  .summary-chip.status {
    color: #69f1c0;
    border-color: rgba(105, 241, 192, 0.28);
    background: rgba(105, 241, 192, 0.08);
  }

  .table-header,
  .table-row {
    display: grid;
    grid-template-columns: 1.55fr 0.9fr 0.7fr;
    gap: 0.7rem;
    align-items: center;
  }

  .table-header {
    padding: 0 0.2rem 0.45rem;
    color: rgba(198, 233, 247, 0.72);
    font-size: clamp(10px, 0.65vw, 12px);
    letter-spacing: 0.04rem;
    border-bottom: 1px solid rgba(79, 195, 247, 0.15);
  }

  .table-body {
    position: relative;
    flex: 1;
    overflow: hidden;
    mask-image: linear-gradient(
      180deg,
      transparent 0%,
      rgba(0, 0, 0, 1) 8%,
      rgba(0, 0, 0, 1) 92%,
      transparent 100%
    );
  }

  .rows-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.48rem;
    padding-top: 0.5rem;
  }

  .table-row {
    position: relative;
    min-height: 2.48rem;
    padding: 0.55rem 0.2rem 0.55rem 0.65rem;
    background: linear-gradient(
      90deg,
      rgba(79, 195, 247, 0.1),
      rgba(79, 195, 247, 0.02)
    );
    transition:
      transform 0.35s ease,
      opacity 0.35s ease;
    overflow: hidden;

    &:hover {
      transform: translateX(-4px);
    }
  }

  .row-glow {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(79, 195, 247, 0.12),
      transparent 55%
    );
    opacity: 0.7;
    pointer-events: none;
  }

  .unit-info,
  .progress-cell,
  .status-cell {
    position: relative;
    z-index: 1;
  }

  .unit-info {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    min-width: 0;
  }

  .city {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    color: #8edfff;
    font-size: clamp(9px, 0.62vw, 11px);
    letter-spacing: 0.04rem;
  }

  .city-dot {
    width: 0.28rem;
    height: 0.28rem;
    border-radius: 50%;
    background: #4fc3f7;
    box-shadow: 0 0 8px rgba(79, 195, 247, 0.8);
  }

  .unit {
    color: #f2fcff;
    font-size: clamp(10px, 0.72vw, 13px);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .progress-cell {
    display: flex;
    flex-direction: column;
    gap: 0.12rem;
  }

  .rate {
    color: #e9fbff;
    font-size: clamp(10px, 0.75vw, 13px);
    font-weight: 600;
  }

  .delta {
    font-size: clamp(9px, 0.6vw, 11px);
  }

  .delta.up {
    color: #68f0b2;
  }

  .delta.down {
    color: #ff8b8b;
  }

  .status-cell {
    display: flex;
    justify-content: flex-end;
  }

  .status-tag {
    min-width: 3.8rem;
    padding: 0.2rem 0.4rem;
    text-align: center;
    font-size: clamp(9px, 0.62vw, 11px);
    letter-spacing: 0.05rem;
    border: 1px solid transparent;
  }

  .status-tag.warning {
    color: #ffd27a;
    border-color: rgba(255, 191, 73, 0.38);
    background: rgba(255, 191, 73, 0.12);
    box-shadow: 0 0 10px rgba(255, 191, 73, 0.08);
  }

  .status-tag.follow {
    color: #6fd8ff;
    border-color: rgba(111, 216, 255, 0.3);
    background: rgba(79, 195, 247, 0.12);
  }

  .status-tag.normal {
    color: #72f1c5;
    border-color: rgba(114, 241, 197, 0.28);
    background: rgba(114, 241, 197, 0.1);
  }
}

.row-shift-move,
.row-shift-enter-active,
.row-shift-leave-active {
  transition: all 0.45s ease;
}

.row-shift-enter-from {
  opacity: 0;
  transform: translateY(18px);
}

.row-shift-leave-to {
  opacity: 0;
  transform: translateY(-18px);
}

.row-shift-leave-active {
  position: absolute;
  width: calc(100% - 0.65rem);
}

@media (max-width: 1440px) {
  .warning-table-container {
    width: 20vw;
  }
}
</style>
