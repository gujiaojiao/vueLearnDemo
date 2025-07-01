<template>
  <div>
    <h1>我是一级路由登录成功后的状态</h1>
  </div>
  <el-card style="margin: 10px 0px">
    <!-- 查询区域 -->
    <el-row :gutter="10">
      <el-col :xs="16" :sm="12" :md="6" :lg="6" :xl="6">
        <el-form :inline="true">
          <el-form-item label="商品名称">
            <el-input
              v-model="input"
              style="width: 240px"
              placeholder="请输入"
            />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="16" :sm="12" :md="6" :lg="6" :xl="6">
        <el-form :inline="true">
          <el-form-item label="商品数量">
            <el-input
              v-model="input"
              style="width: 240px"
              placeholder="请输入"
            />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="16" :sm="12" :md="6" :lg="6" :xl="6">
        <el-form :inline="true">
          <el-form-item label="商品发货地">
            <el-input
              v-model="input"
              style="width: 240px"
              placeholder="请输入"
            />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :xs="16" :sm="12" :md="6" :lg="6" :xl="6">
        <el-form :inline="true">
          <el-form-item label="价格区间">
            <el-input v-model="input" style="width: 120px" placeholder="最低" />
            &nbsp; - &nbsp;
            <el-input v-model="input" style="width: 120px" placeholder="最高" />
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </el-card>
</template>

<script setup lang="ts">
// import {onMounted} from 'vue';
// import useUserStore from '@/store/modules/user';
// let userStore=useUserStore();
// onMounted(()=>{
//     userStore.userInfo();
// })
</script>

<style scoped></style>
