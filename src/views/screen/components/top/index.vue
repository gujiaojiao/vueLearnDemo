<template>
  <div class="top">
    <div class="left">
      <span class="lbtn" @click="gohome">首页</span>
    </div>
    <div class="center">
      <div class="title">某某市职业健康大数据风险评估平台</div>
    </div>
    <div class="right">
      <span class="rbtn">统计报告</span>
      <span class="time">当前时间：{{ time }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// 点击首页按钮返回首页
import { useRouter } from 'vue-router'
import moment from 'moment'
import { ref, onMounted, onBeforeMount } from 'vue'
// 获取路由器对象
let $router = useRouter()
// 按钮点击回调
const gohome = () => {
  $router.push('/home')
}
// // 存储当前时间
let time = ref(moment().format('YYYY年MM月DD日 HH时mm分ss秒'))
let timer = ref(0)
// 每挂载完毕后刷新时间
onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('YYYY年MM月DD日 HH时mm分ss秒')
  }, 1000)
})
onBeforeMount(() => {
  clearInterval(timer.value)
})
</script>
<script lang="ts">
// 对外暴露Top子组件
export default {
  name: 'Top',
}
</script>
<style scoped lang="scss">
.top {
  width: 100%;
  height: 40px;
  display: flex;
  .left {
    flex: 1;
    // width: 100%;
    height: 100%;
    background: url('../../images/dataScreen-header-left-bg.png') no-repeat;
    background-size: cover;
    .lbtn {
      float: right;
      width: 150px;
      height: 40px;
      background: url('../../images/dataScreen-header-btn-bg-l.png') no-repeat;
      background-size: 100% 100%;
      font-size: 20px;
      text-align: center;
      line-height: 35px;
      color: #29fcff;
    }
  }
  .center {
    flex: 2;
    .title {
      width: 100%;
      height: 74px;
      background: url('../../images/dataScreen-header-center-bg.png') no-repeat;
      background-size: 100% 100%;
      font-size: 40px;
      text-align: center;
      line-height: 74px;
      color: #29fcff;
    }
  }
  .right {
    flex: 1;
    height: 100%;
    background: url('../../images/dataScreen-header-right-bg.png') no-repeat;
    background-size: cover;
    display: flex;
    // text-align: center;
    align-items: center;
    justify-content: space-between;
    .rbtn {
      float: left;
      width: 150px;
      height: 40px;
      background: url('../../images/dataScreen-header-btn-bg-r.png') no-repeat;
      background-size: 100% 100%;
      font-size: 20px;
      text-align: center;
      line-height: 35px;
      color: #29fcff;
    }
    .time {
      margin-right: 10px;
      color: #29fcff;
    }
  }
}
</style>