<template>
    <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
      <component :is="LayOutSettingStore.fold?'Fold':'Expand'"></component>
  </el-icon>
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
      <el-icon>
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="margin-left:5px;">{{item.meta.title}}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import {ref} from 'vue';
import useLayOutSettingStore from '@/store/modules/setting'
// 定义一个响应式数据控制图标切换,获取layout配置相关的仓库
let LayOutSettingStore=useLayOutSettingStore();//控制菜单折叠还是打开
// 获取路由对象
let $route=useRoute();
//点击图标的方法 
const changeIcon=()=>{
    // 图标进行切换
    LayOutSettingStore.fold=!LayOutSettingStore.fold
}
</script>
<script lang="ts">
export default{
    name:"Breadcrumb"
}
</script>
<style scoped>
</style>