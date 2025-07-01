<template>
  <!-- 路由组件出口的位置 -->
  <router-view v-slot="{ Component, route }">
    <!-- <transition name="fade" mode="out-in"> -->
      <!-- 渲染layout一级路由组件的子路由 -->
      <!-- 缓存 -->
      <keep-alive>
        <component :is="Component" v-if="flag" :key="route.fullPath" />
      </keep-alive>
    <!-- </transition> -->
  </router-view> 
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from 'vue'
import useLayOutSettingStore from '@/store/modules/setting'
let layOutSettingStore = useLayOutSettingStore()
// 控制当前组件是否销毁重建
let flag = ref(true)
// 监听仓库内部数据是否发生变化，若发生变化则代表已经刷新
watch(
  () => layOutSettingStore.refresh,
  () => {
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)
</script>
<script lang="ts">
export default {
  name: 'Main',
}
</script>
<style scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s;
}
.fade-enter-to {
  opacity: 1;
}
</style>
