<template>
  <div class="user">
    <div class="search">
      <RHYForm v-bind="searchFormConfig"></RHYForm>
    </div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import RHYForm from '@/base-ui/form'
import { searchFormConfig } from '@/views/main/system/user/config/search.config'
</script>

<style scoped lang="less"></style>
