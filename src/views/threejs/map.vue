<template>
  <div class="container" ref="container">
    <HeaderBar />
    <StatCard title="启用考核模板" :value="43" unit="套" position="left" />
    <StatCard
      title="指标填报率"
      :value="91.68"
      unit="%"
      position="right"
      :decimals="2"
    />
    <div class="mapWeb" ref="mapWeb">
      <div class="sceneLoading" :class="{ 'sceneLoading--hidden': sceneReady }">
        <div class="sceneLoading__ring"></div>
        <div class="sceneLoading__text">地图引擎加载中</div>
      </div>
      <RoseChart />
      <BarChart />
      <ControlPanel
        :flyEffectActive="flyEffectActive"
        :particleEffect="particleEffect"
        @toggleFlyEffect="toggleFlyEffect"
        @toggleParticleEffect="toggleParticleEffect"
      />
      <WarningTable :rows="warningTableData" :active-city="activeCity" />
      <TrendChart />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import RoseChart from './components/RoseChart.vue'
import BarChart from './components/BarChart.vue'
import HeaderBar from './components/HeaderBar.vue'
import StatCard from './components/StatCard.vue'
import ControlPanel from './components/ControlPanel.vue'
import TrendChart from './components/TrendChart.vue'
import WarningTable from './components/WarningTable.vue'
import { useThreeMapScene } from './useThreeMapScene'

const mapWeb = ref(null)
const container = ref(null)
const particleEffect = ref(false)
const flyEffectActive = ref(false)
const sceneReady = ref(false)
const activeCity = ref('全省')

const warningTableData = [
  {
    city: '南京市',
    unit: '鼓楼区免疫规划综合评价',
    rate: 78.6,
    delta: -2.4,
    statusText: '逾期整改',
    statusClass: 'warning',
  },
  {
    city: '苏州市',
    unit: '工业园区常规接种单位评价',
    rate: 82.4,
    delta: -1.7,
    statusText: '逾期整改',
    statusClass: 'warning',
  },
  {
    city: '无锡市',
    unit: '梁溪区狂犬暴露预防处置门诊评价',
    rate: 85.1,
    delta: -0.9,
    statusText: '限期整改',
    statusClass: 'follow',
  },
  {
    city: '常州市',
    unit: '新北区疾控机构综合评价',
    rate: 87.3,
    delta: 0.6,
    statusText: '限期整改',
    statusClass: 'follow',
  },
  {
    city: '南通市',
    unit: '崇川区常规接种单位评价',
    rate: 93.4,
    delta: 1.2,
    statusText: '已闭环',
    statusClass: 'normal',
  },
  {
    city: '徐州市',
    unit: '云龙区免疫规划综合评价',
    rate: 79.8,
    delta: -3.1,
    statusText: '逾期整改',
    statusClass: 'warning',
  },
  {
    city: '盐城市',
    unit: '亭湖区狂犬暴露预防处置门诊评价',
    rate: 84.9,
    delta: -1.1,
    statusText: '限期整改',
    statusClass: 'follow',
  },
  {
    city: '扬州市',
    unit: '广陵区常规接种单位评价',
    rate: 92.6,
    delta: 0.8,
    statusText: '已闭环',
    statusClass: 'normal',
  },
  {
    city: '泰州市',
    unit: '海陵区免疫规划综合评价',
    rate: 88.6,
    delta: -0.4,
    statusText: '限期整改',
    statusClass: 'follow',
  },
  {
    city: '宿迁市',
    unit: '宿城区常规接种单位评价',
    rate: 81.3,
    delta: -2.2,
    statusText: '逾期整改',
    statusClass: 'warning',
  },
  {
    city: '镇江市',
    unit: '京口区狂犬暴露预防处置门诊评价',
    rate: 89.5,
    delta: 0.3,
    statusText: '限期整改',
    statusClass: 'follow',
  },
  {
    city: '连云港市',
    unit: '海州区免疫规划综合评价',
    rate: 77.9,
    delta: -2.8,
    statusText: '逾期整改',
    statusClass: 'warning',
  },
  {
    city: '淮安市',
    unit: '淮阴区常规接种单位评价',
    rate: 86.2,
    delta: -0.5,
    statusText: '限期整改',
    statusClass: 'follow',
  },
]

const cityEvaluationData = [
  { name: '南京市', total: 214, completed: 203, rate: 94.9 },
  { name: '苏州市', total: 187, completed: 175, rate: 93.6 },
  { name: '无锡市', total: 126, completed: 115, rate: 91.3 },
  { name: '常州市', total: 98, completed: 90, rate: 91.8 },
  { name: '南通市', total: 104, completed: 98, rate: 94.2 },
  { name: '徐州市', total: 131, completed: 112, rate: 85.5 },
  { name: '扬州市', total: 77, completed: 72, rate: 93.5 },
  { name: '盐城市', total: 103, completed: 88, rate: 85.4 },
  { name: '泰州市', total: 68, completed: 61, rate: 89.7 },
  { name: '镇江市', total: 59, completed: 56, rate: 94.9 },
  { name: '淮安市', total: 82, completed: 70, rate: 85.4 },
  { name: '连云港市', total: 71, completed: 58, rate: 81.7 },
  { name: '宿迁市', total: 64, completed: 53, rate: 82.8 },
]

const cityEvaluationMap = new Map(
  cityEvaluationData.map((item) => [item.name, item]),
)

const totalEvaluationUnits = cityEvaluationData.reduce(
  (sum, item) => sum + item.total,
  0,
)

const { initScene, toggleFlyEffect, toggleParticleEffect } = useThreeMapScene({
  mapWeb,
  flyEffectActive,
  particleEffect,
  activeCity,
  cityEvaluationMap,
  totalEvaluationUnits,
  sceneReady,
})

onMounted(() => {
  initScene()
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #192b41;

  .mapWeb {
    width: 100%;
    height: 100%;
    position: relative;
    background:
      radial-gradient(
        circle at 50% 42%,
        rgba(66, 149, 219, 0.16),
        transparent 34%
      ),
      linear-gradient(180deg, #23344d 0%, #192b41 42%, #121827 100%);

    .sceneLoading {
      position: absolute;
      inset: 0;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;
      background:
        radial-gradient(
          circle at center,
          rgba(90, 196, 255, 0.12),
          transparent 28%
        ),
        linear-gradient(180deg, rgba(25, 43, 65, 0.94), rgba(16, 22, 36, 0.92));
      color: #bdeaff;
      letter-spacing: 2px;
      transition:
        opacity 0.35s ease,
        visibility 0.35s ease;
    }

    .sceneLoading--hidden {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }

    .sceneLoading__ring {
      width: 76px;
      height: 76px;
      border: 2px solid rgba(112, 216, 255, 0.18);
      border-top-color: rgba(112, 216, 255, 0.9);
      border-radius: 50%;
      box-shadow: 0 0 18px rgba(71, 192, 255, 0.22);
      animation: scene-loading-spin 1s linear infinite;
    }

    .sceneLoading__text {
      font-size: 16px;
      text-shadow: 0 0 10px rgba(79, 197, 255, 0.38);
    }

    .returnBack {
      position: absolute;
      top: 2%;
      left: 3%;

      .el-button {
        background: transparent;
        border: 1px solid cyan;
        color: cyan;
      }
    }

    .addContent {
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
  }
}

@keyframes scene-loading-spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
