<template>
  <div class="layout_container">
    <!-- 左侧菜单栏 -->
    <div
      class="layout_slider"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <Logo></Logo>
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu
          :default-active="$route.path"
          background-color="#001529"
          text-color="white"
          :collapse="LayOutSettingStore.fold ? true : false"
        >
          <!-- <el-menu-item index="1">首页</el-menu-item>
                    <el-menu-item index="2">数据大屏</el-menu-item> -->
          <!-- 折叠菜单 -->
          <!-- <el-sub-menu index="3-1">
                        <template #title><span>权限管理</span></template>
                    </el-sub-menu> -->
          <!-- 根据路由动态生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航栏 -->
    <div
      class="layout_tabber"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区域 -->
    <div
      class="layout_main"
      :class="{ fold: LayOutSettingStore.fold ? true : false }"
    >
      <!-- <Router-view></Router-view> -->
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
// 获取路由对象
import { useRoute } from 'vue-router'
//引入左侧菜单logo组件
import Logo from '@/layout/logo/index.vue'
// 引入菜单组件
import Menu from '@/layout/menu/index.vue'
// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
import useLayOutSettingStore from '@/store/modules/setting'
// 引入右侧内容展示区域
import Main from './main/index.vue'
// 引入顶部tabbar组件
import Tabbar from './tabbar/index.vue'
let userStore = useUserStore()
// 获取layout配置仓库
let LayOutSettingStore = useLayOutSettingStore()
// 获取路由对象
let $route = useRoute()
console.log($route.path)
//console.log('123');
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  // background-color: aqua;
  .layout_slider {
    color: white;
    width: $base_menu_width;
    height: 100%;
    background: $base_menu_background;
    transition: all 0.3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base_menu_logo_height);
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base_menu_width_min;
    }
  }
  .layout_tabber {
    position: fixed;
    width: calc(100% - $base_menu_width);
    height: $base_tabbar_height;
    top: 0px;
    right: 0px;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base_menu_width_min);
    }
  }
  .layout_main {
    position: absolute;
    width: calc(100% - $base_menu_width);
    height: calc(100vh - 50px);
    // background:wheat ;
    top: $base_tabbar_height;
    right: 0px;
    padding: 20px;
    // 滚动条
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base_menu_width_min);
    }
  }
}
</style>
