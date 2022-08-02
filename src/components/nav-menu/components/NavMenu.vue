<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/vue.svg" alt="logo" />
      <span class="title">Vue3+TS</span>
    </div>
    <el-menu
      active-text-color="2"
      text-color="#fff"
      background-color="#545c64"
      class="el-menu-vertical"
      default-active="2"
      :collapse="collapse"
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon === 'el-icon-monitor'"
                ><Monitor
              /></el-icon>
              <el-icon v-if="item.icon === 'el-icon-setting'"
                ><Setting
              /></el-icon>
              <el-icon v-if="item.icon === 'el-icon-goods'"
                ><ShoppingBag
              /></el-icon>
              <el-icon v-if="item.icon === 'el-icon-chat-line-round'"
                ><Message
              /></el-icon>
              <span v-if="!collapse">{{ item.name }}</span>
            </template>
            <!--遍历item-->
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleMenuItemClick(subItem)"
              >
                <span>{{ subItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from '@/store'
import { computed, defineProps, withDefaults } from 'vue'
import { Monitor, Setting, ShoppingBag, Message } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const props = withDefaults(
  defineProps<{
    collapse: boolean
  }>(),
  {
    collapse: false
  }
)
const store = useStore()
const userMenus = computed(() => {
  return store.state.login.userMenus
})
const router = useRouter()
const handleMenuItemClick = (item: any) => {
  router.push({
    path: item.url ?? '/not-found'
  })
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  :deep(.el-sub-menu__title) {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
