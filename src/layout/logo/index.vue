<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base_menu_logo_height;
  color: white;
  //font-size: 20px;
  display: flex;
  align-items: center;
  // position: relative;
  // top: 10px;
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
  }
  p {
    padding-left: 10px;
    font-size: $base_menu_p_fontsize;
  }
}
</style>
