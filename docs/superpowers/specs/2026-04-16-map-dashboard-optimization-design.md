# 江苏省疫苗接种3D可视化大屏优化设计文档

**日期**: 2026-04-16
**项目**: new_vue3_project-bj1
**目标**: 全面优化3D可视化地图大屏，提升政务汇报展示效果

---

## 1. 项目概述

### 1.1 当前状态

- **玫瑰图** (`RoseChart.vue`): 左上角，显示江苏省13市接种单位数量
- **柱状图** (`BarChart.vue`): 左下角，显示各市考核完成率
- **3D地图** (`map.vue`): 居中，高度80vh，江苏地图 + 飞线/粒子特效
- **控制面板**: 右侧，飞线特效/粒子特效开关按钮

### 1.2 存在问题

- 缺少大屏标题/头部区域
- 布局不够平衡，左侧图表堆叠，右侧控制面板简单
- 缺少关键指标面板（全省汇总数据）
- 图表内容单一，缺少趋势分析
- 退出按钮缺失/样式简单
- 3D地图交互不够丰富

### 1.3 优化目标

打造**政务汇报级可视化大屏**，具备：

- 高端专业、权威感强的视觉设计
- 层级清晰的信息展示（概览 → 核心 → 详情）
- 组件化封装，便于维护和扩展

---

## 2. 整体布局设计

采用**浮动面板环绕**布局，保持3D地图80vh的核心视觉地位：

```
┌────────────────────────────────────────────────────────────────┐
│ ╔════════════════════════════════════════════════════════════╗ │ ← HeaderBar (悬浮)
│ ║  江苏省疫苗接种管理可视化平台                    [退出] ║ │   高度60px
│ ╚════════════════════════════════════════════════════════════╝ │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌─────────────┐                            ┌─────────────┐    │ ← StatCard (左上右上)
│  │ 接种单位总数 │      3D地图               │ 平均完成率   │      高度80px
│  │    1102     │      (居中80vh)            │   92.3%     │
│  └─────────────┘                            └─────────────┘    │
│                                                                │
│  ┌─────────────┐                            ┌─────────────┐    │ ← RoseChart + ControlPanel
│  │  玫瑰图     │                            │ 控制面板     │
│  │ (原有保留)  │                            │ +数字卡片    │
│  └─────────────┘                            └─────────────┘    │
│                                                                │
│  ┌─────────────┐                            ┌─────────────┐    │ ← BarChart + TrendChart
│  │  柱状图     │                            │ 趋势折线图   │
│  │ (原有保留)  │                            │ (新增)      │
│  └─────────────┘                            └─────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 2.1 布局参数

| 区域           | 位置           | 尺寸                        | 特性                         |
| -------------- | -------------- | --------------------------- | ---------------------------- |
| HeaderBar      | 顶部居中，悬浮 | width: 100%, height: 60px   | 半透明深蓝背景，渐变边框光效 |
| StatCard-Left  | 左上角         | width: 200px, height: 80px  | 悬浮叠加，数字跳动效果       |
| StatCard-Right | 右上角         | width: 200px, height: 80px  | 悬浮叠加，数字跳动效果       |
| RoseChart      | 左侧中上       | 原有尺寸保持 (350-450px)    | 位置微调，避免与顶部卡片重叠 |
| BarChart       | 左侧中下       | 原有尺寸保持 (350-450px)    | 位置微调                     |
| ControlPanel   | 右侧中上       | width: 150px                | 整合飞线/粒子开关 + 数字卡片 |
| TrendChart     | 右侧中下       | width: 380px, height: 250px | 新增趋势折线图               |
| 3D地图         | 居中           | 保持80vh                    | 不压缩，图表浮动叠加         |

---

## 3. 新增组件设计

### 3.1 HeaderBar.vue - 标题栏组件

**功能**:

- 显示大屏标题："江苏省疫苗接种管理可视化平台"
- 右侧退出按钮（科技感风格）
- 悬浮叠加在地图顶部

**样式设计**:

```scss
.header-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: linear-gradient(
    180deg,
    rgba(8, 18, 38, 0.95) 0%,
    rgba(8, 18, 38, 0.7) 100%
  );
  border-bottom: 1px solid rgba(79, 195, 247, 0.3);
  z-index: 200;

  // 渐变光效边框
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(79, 195, 247, 0.8),
      transparent
    );
  }
}
```

**标题样式**:

- 字体: 使用系统中文字体或引入特色字体
- 颜色: #e0f7fa（亮青色）
- 效果: 文字发光 + letter-spacing: 4px

**退出按钮样式**:

- 科技感边框（渐变光效）
- hover时发光增强
- 点击后返回上一页或关闭大屏

### 3.2 StatCard.vue - 实时数字卡片组件

**功能**:

- 显示关键指标数值
- 数字跳动动画效果（可选）
- Props: `title`, `value`, `unit`, `icon`

**显示指标**:
| 卡片 | 标题 | 数值 | 单位 |
|------|------|------|------|
| StatCard-Left | 接种单位总数 | 1102 | 家 |
| StatCard-Right | 平均完成率 | 92.3 | % |

**样式设计**:

```scss
.stat-card {
  position: absolute;
  width: 200px;
  height: 80px;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.85),
    rgba(15, 35, 60, 0.75)
  );
  border-radius: 4px;
  z-index: 150;

  // 科技边框（与RoseChart/BarChart一致）
  &::before {
    /* 渐变边框 */
  }
  &::after {
    /* 左上角装饰 */
  }

  .stat-value {
    font-size: 28px;
    font-weight: bold;
    color: #4fc3f7;
    text-shadow: 0 0 20px rgba(79, 195, 247, 0.5);
  }
}
```

**数字跳动效果**:

- 使用 `gsap` 或 CSS animation
- 组件挂载时从 0 动画到目标值
- 持续时间: 1.5s

### 3.3 ControlPanel.vue - 控制面板组件

**功能**:

- 整合原有的飞线特效/粒子特效开关
- 可选：下方添加数字卡片
- Props: `flyEffectActive`, `particleEffect`
- Events: `toggleFlyEffect`, `toggleParticleEffect`

**样式设计**:

- 与原有右侧控制按钮风格一致
- 科技边框 + hover发光效果
- 按钮样式:
  - 默认: 透明背景 + 青色边框
  - 激活: 青色背景 + 白色文字

### 3.4 TrendChart.vue - 趋势折线图组件

**功能**:

- 显示接种单位数量增长趋势（近12个月）
- ECharts 折线图实现
- Mock数据（或对接真实数据）

**数据结构**:

```typescript
const trendData = [
  { month: '2025-05', count: 980 },
  { month: '2025-06', count: 995 },
  { month: '2025-07', count: 1010 },
  // ... 近12个月
  { month: '2026-04', count: 1102 },
]
```

**样式设计**:

```scss
.trend-chart {
  position: absolute;
  width: 380px;
  height: 250px;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(
    145deg,
    rgba(8, 18, 38, 0.9),
    rgba(15, 35, 60, 0.8)
  );
  // 科技边框（与其他组件一致）
}
```

**图表配置**:

- X轴: 月份（格式化为"5月"、"6月"等）
- Y轴: 接种单位数量
- 折线: 青色 #4fc3f7，带渐变填充区域
- 交互: hover显示详细数值

---

## 4. 组件修改

### 4.1 RoseChart.vue - 微调

- 位置调整: `top: 15%`（避免与StatCard重叠）
- 样式保持原有科技边框风格
- 确保z-index正确

### 4.2 BarChart.vue - 微调

- 位置调整: `bottom: 15%`
- 样式保持原有科技边框风格
- 确保z-index正确

### 4.3 map.vue - 主文件重构

**改动**:

- 移除原有的右侧控制按钮（迁移到ControlPanel组件）
- 引入所有新组件
- 调整布局坐标
- 处理退出按钮点击事件

**组件引入**:

```vue
<script setup>
import HeaderBar from './components/HeaderBar.vue'
import StatCard from './components/StatCard.vue'
import RoseChart from './components/RoseChart.vue'
import BarChart from './components/BarChart.vue'
import ControlPanel from './components/ControlPanel.vue'
import TrendChart from './components/TrendChart.vue'
</script>

<template>
  <div class="container">
    <!-- 标题栏 -->
    <HeaderBar />

    <!-- 实时数字卡片 -->
    <StatCard title="接种单位总数" :value="1102" unit="家" position="left" />
    <StatCard title="平均完成率" :value="92.3" unit="%" position="right" />

    <!-- 3D地图容器 -->
    <div class="mapWeb" ref="mapWeb">
      <!-- 原有图表 -->
      <RoseChart />
      <BarChart />

      <!-- 新增组件 -->
      <ControlPanel
        :flyEffectActive="flyEffectActive"
        :particleEffect="particleEffect"
        @toggleFlyEffect="toggleFlyEffect"
        @toggleParticleEffect="toggleParticleEffect"
      />
      <TrendChart />
    </div>
  </div>
</template>
```

---

## 5. 统一视觉风格

所有面板/卡片组件采用一致的科技风格：

### 5.1 背景色

```scss
background: linear-gradient(
  145deg,
  rgba(8, 18, 38, 0.9),
  rgba(15, 35, 60, 0.8)
);
```

### 5.2 边框光效

```scss
// 渐变边框
&::before {
  background: linear-gradient(
    135deg,
    rgba(79, 195, 247, 0.5) 0%,
    rgba(79, 195, 247, 0.1) 30%,
    transparent 50%,
    rgba(79, 195, 247, 0.1) 70%,
    rgba(79, 195, 247, 0.4) 100%
  );
}

// 四角装饰
&::after {
  border-top: 2px solid #4fc3f7;
  border-left: 2px solid #4fc3f7;
}
```

### 5.3 文字颜色

- 标题: #e0f7fa（亮青色）
- 数值: #4fc3f7（主青色）
- 辅助文字: #b0bec5（灰青色）

### 5.4 发光效果

```scss
text-shadow: 0 0 10px rgba(79, 195, 247, 0.3);
box-shadow: 0 0 20px rgba(79, 195, 247, 0.08);
```

---

## 6. 实施步骤

### Phase 1: 基础组件创建

1. 创建 `HeaderBar.vue` - 标题栏 + 退出按钮
2. 创建 `StatCard.vue` - 实时数字卡片
3. 创建 `ControlPanel.vue` - 整合控制按钮

### Phase 2: 图表组件创建

4. 创建 `TrendChart.vue` - 趋势折线图

### Phase 3: 主文件重构

5. 修改 `map.vue` - 引入新组件，调整布局
6. 微调 `RoseChart.vue` / `BarChart.vue` 位置

### Phase 4: 测试与优化

7. 测试各组件显示效果
8. 调整布局细节，确保不遮挡地图
9. 验证交互功能（退出按钮、特效开关）

---

## 7. 文件结构

```
src/views/threejs/
├── map.vue                    # 主文件（重构）
├── mapData.json               # 地图数据（保持）
├── areaLevel.json             # 区域数据（保持）
└── components/
    ├── RoseChart.vue          # 玫瑰图（微调）
    ├── BarChart.vue           # 柱状图（微调）
    ├── HeaderBar.vue          # 标题栏（新增）
    ├── StatCard.vue           # 数字卡片（新增）
    ├── ControlPanel.vue       # 控制面板（新增）
    └── TrendChart.vue         # 趋势图（新增）
```

---

## 8. 预期效果

完成后可视化大屏将具备：

- ✅ 醒目的标题栏和科技感退出按钮
- ✅ 左右对称的实时数字卡片（关键指标一目了然）
- ✅ 平衡的图表布局（左侧玫瑰图+柱状图，右侧控制面板+趋势图）
- ✅ 保留原有的3D地图核心地位（80vh）
- ✅ 统一的科技蓝视觉风格
- ✅ 组件化封装，便于维护扩展
