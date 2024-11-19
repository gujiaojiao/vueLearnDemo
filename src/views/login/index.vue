<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form
          class="login_form"
          :model="loginForm"
          :rules="rules"
          ref="loginForms"
        >
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginForm.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-button
            :loading="loading"
            class="login_btn"
            type="primary"
            size="deafult"
            @click="login"
          >
            登录
          </el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
// 引进路由
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user'
import { useRoute } from 'node_modules/vue-router/dist/vue-router'
// 获取el-form组件
let loginForms = ref()
// 获取路由
let $router = useRouter()
let useStore = useUserStore()
let loading = ref(false)
// 收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
// 登录按钮回调
const login = async () => {
  // 保证全部表单在校验通过后再发请求
  await loginForms.value.validate()

  // 加载效果开始加载
  loading.value = true
  //  通知仓库发登录请求
  // 请求成功->首页展示数据
  // 请求失败->提示登录失败
  try {
    await useStore.userLogin(loginForm)
    // 编程式导航跳转到数据首页
    $router.push('/')
    // 登录成功提示信息
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}`,
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
// 自定义校验规则函数
const validatorPassword = (rule: any, value: any, callback: any) => {
  // rule:即为校验规则对象
  // value:即为表单元素文本内容
  // 函数：如果符合条件callback放行通过，不符合则注入错误提示信息
  if (value.length >= 6 && value.length <= 15) {
    callback()
  } else {
    callback(new Error('账号密码至少为6位，且不超过15位'))
  }
}
// 定义表单校验需要配置对象
const rules = {
  // 规则对象属性：
  // required，代表这个字段务必要检验
  // min：文本长度至少多少位，
  // max：文本长度最多多少位，
  // message：错误时出现的提示信息，
  // trigger：触发校验表单的时机，change->文本发生变化时触发校验，blur：失去焦点时触发校验规则
  username: [
    {
      required: true,
      min: 5,
      max: 10,
      message: '账号名至少为5位，且不超过10位',
      trigger: 'change',
    },
  ],
  password: [
    {
      // required: true,min: 6,max: 15,message: '密码至少为6位，且不超过15位',trigger: 'change'
      // 自定义校验表单
      trigger: 'change',
      validator: validatorPassword,
    },
  ],
}
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg');

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url('@/assets/images/login_form.png');
    padding: 50px;
    h1 {
      position: relative;
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 30px;
      margin: 20px 0;
    }
  }
}
</style>
