import { createApp } from 'vue'
import axios from 'axios'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import Draggable from '@/../lib/vuedraggable/dist/vuedraggable.umd.js'
import 'virtual:svg-icons-register'

import App from './App.vue'
import '@/styles/index.scss'

import ContainerWidgets from '@/components/form-designer/form-widget/container-widget/index'
import ContainerItems from '@/components/form-render/container-item/index'

import { addDirective } from '@/utils/directive'
import { loadExtension } from '@/extension/extension-loader'

const app = createApp(App)

//全局注册 element-plus icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//注册全局变量
if (typeof window !== 'undefined') {
  window.axios = axios
}

app.use(ElementPlus)
app.component('draggable', Draggable)
app.use(ContainerWidgets)
app.use(ContainerItems)

addDirective(app)
loadExtension(app)//加载扩展组件

app.mount('#app')
