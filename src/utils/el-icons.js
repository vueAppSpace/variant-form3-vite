import { Edit, Minus, Plus, Search } from '@element-plus/icons-vue'

export function registerIcon (app) {
  app.component('Edit', Edit)
  app.component('Minus', Minus)
  app.component('Plus', Plus)
  app.component('Search', Search)
}
