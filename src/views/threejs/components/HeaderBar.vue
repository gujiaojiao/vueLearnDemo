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
  router.push('/')
}
</script>

<style scoped lang="scss">
.header-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4vh;
  min-height: 50px;
  max-height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vw;
  background: linear-gradient(180deg,
    rgba(8, 18, 38, 0.95) 0%,
    rgba(8, 18, 38, 0.7) 100%
  );
  border-bottom: 1px solid rgba(79, 195, 247, 0.3);
  z-index: 200;
  box-sizing: border-box;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg,
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
      font-size: clamp(16px, 1.5vw, 26px);
      font-weight: 600;
      color: #e0f7fa;
      letter-spacing: 0.2vw;
      text-shadow: 0 0 20px rgba(79, 195, 247, 0.5);
    }

    .title-glow {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 2.5rem;
      background: radial-gradient(ellipse at center,
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
    gap: 0.3rem;
    padding: 0.5rem 1.2rem;
    background: transparent;
    border: 1px solid rgba(79, 195, 247, 0.6);
    color: #4fc3f7;
    font-size: clamp(12px, 0.8vw, 14px);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(135deg,
        rgba(79, 195, 247, 0.6) 0%,
        transparent 50%,
        rgba(79, 195, 247, 0.6) 100%
      );
      mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      mask-composite: exclude;
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      pointer-events: none;
    }

    .btn-icon {
      font-size: clamp(14px, 0.9vw, 18px);
      opacity: 0.8;
    }

    .btn-text {
      letter-spacing: 0.05rem;
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