<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { reactive } from 'vue'
import { rules } from '../config/account-config'
import type { FormInstance } from 'element-plus'
import localCatch from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCatch.getCatch('name') ?? 'lilei',
      password: localCatch.getCatch('password') ?? '123456'
    })
    const formRef = ref<FormInstance>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          //判断记住密码
          if (isKeepPassword) {
            //  本地缓存
            localCatch.setCache('name', account.name)
            localCatch.setCache('password', account.password)
          } else {
            localCatch.deleteCatch('name')
            localCatch.deleteCatch('password')
          }
          //  登录验证的逻辑
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped></style>
