# Immunization Evaluation Dashboard Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reframe the existing 3D map screen as an XX Province immunization comprehensive evaluation dashboard with coherent mock evaluation data.

**Architecture:** Keep the current Vue, ECharts, and Three.js layout. Centralize the content change around the existing components: headline and overview metrics, regional map values, chart labels, and the issue list all describe one evaluation process.

**Tech Stack:** Vue 3, Vite, ECharts, Three.js, Node built-in test runner.

---

### Task 1: Establish the dashboard content contract

**Files:**
- Create: `test/evaluation-dashboard-content.test.mjs`

- [ ] **Step 1: Write a failing test**

```js
test('uses comprehensive evaluation terminology across the map dashboard', () => {
  assert.match(header, /XX省免疫规划综合评价系统/)
  assert.match(map, /考核模板/)
  assert.match(warningTable, /整改跟踪/)
})
```

- [ ] **Step 2: Run the test and verify it fails**

Run: `node --test test/evaluation-dashboard-content.test.mjs`

Expected: FAIL because the screen still contains vaccination-management labels.

### Task 2: Replace the displayed mock data

**Files:**
- Modify: `src/views/threejs/map.vue`
- Modify: `src/views/threejs/components/HeaderBar.vue`
- Modify: `src/views/threejs/components/RoseChart.vue`
- Modify: `src/views/threejs/components/BarChart.vue`
- Modify: `src/views/threejs/components/TrendChart.vue`
- Modify: `src/views/threejs/components/WarningTable.vue`
- Modify: `src/views/threejs/components/ControlPanel.vue`
- Modify: `src/views/threejs/three/mapLabels.js`

- [ ] **Step 1: Use evaluation-domain labels and values**

Replace vaccination-unit counts with the three evaluation scopes: district/county, routine vaccination clinic, and rabies-exposure clinic. Show template coverage, indicator submission progress, quality score, and corrective-action status.

- [ ] **Step 2: Run the content contract**

Run: `node --test test/evaluation-dashboard-content.test.mjs`

Expected: PASS.

### Task 3: Verify integration

**Files:**
- Verify: `src/views/threejs/map.vue`

- [ ] **Step 1: Build production assets**

Run: `npm run build`

Expected: Vite finishes without compilation errors.

- [ ] **Step 2: Inspect the live screen**

Run: `npm run dev -- --host 127.0.0.1`

Expected: `/threejs` renders the title, evaluation charts, map labels, and issue list without overlap.
