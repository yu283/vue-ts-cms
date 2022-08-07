<template>
  <div class="overview">
    <RHYCard title="关于">
      <div class="c-left">
        Vue3CMS 是基于 Vue3、Vuex、VueRouter、Vue-cli、 ElementPlus
        、TypeScript、Echart5 等后台系统解决方案。
      </div>
    </RHYCard>

    <RHYCard title="技术栈">
      <div class="text-link">
        <template v-for="(item, index) in technologyStacks" :key="index">
          <div class="item">
            <span class="title">{{ item.title }} : </span>
            <el-link type="primary">{{ item.desp }}</el-link>
          </div>
        </template>
      </div>
      <RHYDescription
        title="生产环境依赖"
        :column="2"
        :table-datas="dependencies"
      ></RHYDescription>
      <RHYDescription
        title="开发环境依赖"
        :column="2"
        :table-datas="devDependencies"
      ></RHYDescription>
    </RHYCard>
    <RHYCard title="项目结构">
      <div class="c-left">
        <RHYCode language="bash" :code="projectDir"></RHYCode>
      </div>
    </RHYCard>
    <RHYCard title="项目规范">
      <RHYDescription
        title="文件命名规范"
        :column="1"
        :table-datas="[
          { name: '文件夹', description: '统一小写, 多个单词使用-分割' },
          {
            name: '文件(.ts .json .d.ts)',
            description: '统一小写, 多个单词使用-分割'
          },
          {
            name: '文件(.vue)',
            description: '采用大驼峰或单个单词小写命名'
          }
        ]"
      ></RHYDescription>
    </RHYCard>

    <RHYCard title="Git提交规范">
      <RHYDescription
        :column="1"
        :table-datas="[
          { name: 'add 操作', description: 'git add ' },
          { name: 'commit 操作', description: 'npm run commit ' }
        ]"
      ></RHYDescription>
    </RHYCard>
  </div>
</template>

<script lang="ts" setup>
import RHYCard from '@/base-ui/card'
import RHYDescription from '@/base-ui/description'
import RHYCode from '@/base-ui/code'

import {
  technologyStacks,
  dependencies,
  devDependencies,
  projectDir
} from './p-config'
</script>

<style scoped lang="less">
.overview {
  .c-left {
    text-align: left;
  }

  .el-card {
    margin-bottom: 20px;
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-card__header span) {
      // ::v-deep .el-card__header span {
      font-weight: 700;
    }
  }

  .description {
    // ::v-deep 重写 element-plus 样式
    &:deep(.el-descriptions__title) {
      // ::v-deep .el-descriptions__title {
      font-weight: 400;
    }
  }
}
.text-link {
  padding: 0 15px;
  margin-bottom: 40px;
  text-align: left;

  .title {
    position: relative;
    display: inline-block;
    margin-right: 20px;
  }

  .item {
    margin: 5px;
  }

  .title::before {
    position: absolute;
    top: 40%;
    left: -15px;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 100%;
    content: '';
  }
}
</style>
