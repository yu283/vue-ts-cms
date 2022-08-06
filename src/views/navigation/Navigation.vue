<template>
  <div class="navigation">
    <el-card class="box-card rhy-card" shadow="always">
      <template #header>
        <div class="card-header">
          <span class="rhy-span">Welcome</span>
        </div>
      </template>
      <div class="message-a">欢迎来到我的项目展示</div>
      <h3>RENHY</h3>
      <h5>这是一个后台管理系统的项目，采用Vue3+TS开发，请跳转至登录开始</h5>
      <el-button
        @click="jumpLogin"
        class="rhy-button"
        size="large"
        type="success"
        >跳转至登录</el-button
      >
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from 'vuex'
const store = useStore()
const jumpLogin = () => {
  store.dispatch('toLogin')
}
</script>

<style scoped>
.navigation {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../assets/img/b1.jpeg');
}
.rhy-card {
  justify-items: center;
  text-align: center;
}
.message-a {
  padding-bottom: 10px;
  font-size: 35px;
}
.rhy-span {
  font-size: 50px;
}
.rhy-button {
  display: block;
  margin: 0 auto;
}
</style>
