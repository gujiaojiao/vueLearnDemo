import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const readSource = (file) => readFile(new URL(file, import.meta.url), 'utf8')

test('uses comprehensive evaluation terminology across the map dashboard', async () => {
  const [header, map, roseChart, warningTable] = await Promise.all([
    readSource('../src/views/threejs/components/HeaderBar.vue'),
    readSource('../src/views/threejs/map.vue'),
    readSource('../src/views/threejs/components/RoseChart.vue'),
    readSource('../src/views/threejs/components/WarningTable.vue'),
  ])

  assert.match(header, /XX省免疫规划综合评价系统/)
  assert.match(map, /考核模板/)
  assert.match(roseChart, /区县综合评价/)
  assert.match(warningTable, /整改跟踪/)
})
