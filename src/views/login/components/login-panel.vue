<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Avatar /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="loginAccount" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Cellphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="loginPhone" />
      </el-tab-pane>
    </el-tabs>
    <div class="input-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="loginBtn" @click="login"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Cellphone } from '@element-plus/icons-vue'
import LoginAccount from '@/views/login/components/login-account.vue'
import LoginPhone from '@/views/login/components/login-phone.vue'

export default defineComponent({
  components: {
    LoginPhone,
    LoginAccount,
    Avatar,
    Cellphone
  },
  setup() {
    const isKeepPassword = ref(true)
    const loginAccount = ref<InstanceType<typeof LoginAccount>>()
    const currentTab = ref<string>('account')
    const loginPhone = ref<InstanceType<typeof LoginPhone>>()

    const login = () => {
      if (currentTab.value === 'account') {
        loginAccount.value?.loginAction(isKeepPassword.value)
      } else {
        //TODO: 手机登录的逻辑
        console.log(loginPhone)
      }
    }

    return { isKeepPassword, login, loginAccount, currentTab }
  }
})
</script>

<style lang="less" scoped>
.login-panel {
  margin-bottom: 100px;
  width: 300px;
  .title {
    text-align: center;
  }
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
.input-control {
  display: flex;
  justify-content: space-between;
}
.loginBtn {
  width: 100%;
  margin-top: 8px;
}
</style>
