import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export function registerIcon (app) {
   // 引用全部element icon
   for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
}
