<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <!-- 顶部左侧静态 -->
      <Breadcrumb/>
    </div>
    <div class="tabbar_right">
         <!--顶部右侧静态-->
         <Setting/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue';
import Setting from './setting/index.vue'
</script>
<script lang="ts">
export default{
    name:"Tabbar"
}
</script>
<style scoped lang="scss">
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar_right{
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>