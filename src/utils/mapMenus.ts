import { RouteRecord } from 'vue-router'

export function mapMenusToRoutes(userManus: any[]): RouteRecord[] {
  const routes: RouteRecord[] = []
  //加载默认所有的routes
  const allRoutes: RouteRecord[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  //根据菜单获取需要添加的routes
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((rout) => rout.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userManus)
  return routes
}
