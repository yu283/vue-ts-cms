<template>
  <div class="login-account">
    <el-form label-width="60px">
      <el-form-item label="手机号" prop="num">
        <el-input v-model="phone.num" placeholder="并未实现"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input v-model="phone.code" placeholder="并未实现"></el-input>
          <el-button class="code-btn" type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return { phone }
  }
})
</script>
.
<style scoped lang="less">
.get-code {
  display: flex;
}
.code-btn {
  margin-left: 5px;
}
</style>
