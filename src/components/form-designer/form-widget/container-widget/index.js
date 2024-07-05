const modules = import.meta.globEager('./*.vue')

//用于全局注册 编辑期 容器组件的插件
export default {
  install(app) {
    for (const path in modules) {
      let cname = modules[path].default.name
      app.component(cname, modules[path].default)
    }
  }
}
