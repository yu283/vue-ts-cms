<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar
        size="default"
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202105%2F29%2F20210529001057_aSeLB.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662024460&t=f9c09f97b9c3a9a292aed55377641ef4"
      />
      <span>{{ name }}</span>
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="CloseBold" @click="quitLogin"
          >退出登录</el-dropdown-item
        >
        <el-dropdown-item divided :icon="Message">用户信息</el-dropdown-item>
        <el-dropdown-item :icon="Management">系统管理</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import {
  ArrowDown,
  CloseBold,
  Message,
  Management
} from '@element-plus/icons-vue'
import { useStore } from '@/store'
import router from '@/router'
import localCatch from '@/utils/cache'

const store = useStore()
let name = store.state.login.userInfo.name
if (name === 'coderwhy') {
  name = 'renhy'
}
const quitLogin = () => {
  router.push('/login')
  localCatch.deleteCatch('token')
}
</script>
<style scoped>
.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
