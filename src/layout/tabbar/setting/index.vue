<template>
<el-button style="small" icon="Refresh" circle @click="updaterefresh"></el-button>
      <el-button style="small" icon="FullScreen" circle @click="fullScreen"></el-button>
      <el-button style="small" icon="Setting" circle></el-button>
      <img :src="userStore.avatar" style="width: 30px; height: 30px;margin:0 20px;border-radius:50%;"/>
      <!-- 下拉菜单 -->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{userStore.username}}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="loginout"> 退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router';
import useLayOutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';
let $router=useRouter();
let layOutSettingStore=useLayOutSettingStore();
let userStore=useUserStore();
// 刷新按钮点击回调
const updaterefresh=()=>{
  layOutSettingStore.refresh=!layOutSettingStore.refresh;
}
// 
const fullScreen=()=>{
  // Dom对象的一个属性，用来判断当前是否为全屏，全屏true，否则false
  let full=document.fullscreenElement;
  // 切换全屏模式
  if(!full){
    // 文档根节点的方法requestFullscreen
    document.documentElement.requestFullscreen();
  }else{
    document.exitFullscreen();
  }
}
//退出登录点击回调 
const loginout=async()=>{
    //第一件事情:需要向服务器发请求[退出登录接口]******
    //第二件事情:仓库当中关于用于相关的数据清空[token|username|avatar]
    //第三件事情:跳转到登录页面
     await userStore.userloginout();
     $router.push({ path: '/login'})
}
</script>
<script lang="ts">
export default{
    name:"Setting"
}
</script>
<style scoped>

</style>