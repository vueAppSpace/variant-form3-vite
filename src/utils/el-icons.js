import {
  Edit, Minus, Plus, InfoFilled, Search, CirclePlus, Delete,
  ArrowDown, ArrowUp
} from '@element-plus/icons-vue'

export function registerIcon(app) {
  app.component('el-icon-edit', Edit)
  app.component('el-icon-minus', Minus)
  app.component('el-icon-plus', Plus)
  app.component('el-icon-search', Search)
  // app.component('el-icon-infofilled', InfoFilled)
  // app.component('el-icon-circleplus', CirclePlus)
  // app.component('el-icon-delete', Delete)
  // app.component('el-icon-arrowdown', ArrowDown)
  // app.component('el-icon-arrowup', ArrowUp)
}
