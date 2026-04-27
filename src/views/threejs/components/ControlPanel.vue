<template>
  <div class="control-panel">
    <span class="corner tr"></span>
    <span class="corner bl"></span>
    <span class="corner br"></span>
    <div class="panel-title">
      <span>特效控制</span>
    </div>
    <div class="panel-content">
      <button class="effect-btn" :class="{ active: flyEffectActive }" @click="$emit('toggleFlyEffect')">
        <span class="btn-icon">◈</span>
        <span class="btn-text">飞线特效</span>
        <span class="btn-status">{{ flyEffectActive ? 'ON' : 'OFF' }}</span>
      </button>
      <button class="effect-btn" :class="{ active: particleEffect }" @click="$emit('toggleParticleEffect')">
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

defineProps<Props>()

defineEmits<{
  toggleFlyEffect: []
  toggleParticleEffect: []
}>()
</script>

<style scoped lang="scss">
.control-panel {
  position: absolute;
  width: 18vw;
  min-width: 280px;
  max-width: 350px;
  top: 8vh;
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
  box-shadow: 0 0 20px rgba(79, 195, 247, 0.08),
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
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
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

  .panel-title {
    flex-shrink: 0;
    text-align: center;
    padding-bottom: 0.4rem;
    margin-bottom: 0.5rem;
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
      font-size: clamp(11px, 0.75vw, 14px);
      color: #e0f7fa;
      font-weight: 500;
      letter-spacing: 0.1rem;
    }
  }

  .panel-content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;
  }

  .effect-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 3rem;
    padding: 0.65rem 0.75rem;
    background: transparent;
    border: 1px solid rgba(79, 195, 247, 0.4);
    color: #4fc3f7;
    font-size: clamp(10px, 0.7vw, 13px);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;

    .btn-icon {
      font-size: clamp(12px, 0.8vw, 15px);
      opacity: 0.7;
    }

    .btn-text {
      flex: 1;
      text-align: center;
      letter-spacing: 0.05rem;
      line-height: 1.3;
    }

    .btn-status {
      font-size: clamp(9px, 0.6vw, 11px);
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

@media (max-width: 1440px) {
  .control-panel {
    width: 20vw;
  }
}
</style>
