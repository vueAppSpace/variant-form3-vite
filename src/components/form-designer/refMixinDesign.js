export default {
  methods: {
    initRefList() {
      if ((this.refList !== null) && !!this.widget.options.name) {
        this.refList[this.widget.options.name] = this
      }
    },

    getWidgetRef(widgetName, showError) {
      let foundRef = this.refList[widgetName]
      if (!foundRef && !!showError) {
        this.$message.error(`组件未找到: ` + widgetName)
      }
      return foundRef
    },

    /* 该方法用于组件重名检查！！ */
    registerToRefList(oldRefName) {
      if ((this.refList !== null) && !!this.widget.options.name) {
        if (!!oldRefName) {
          delete this.refList[oldRefName]
        }
        this.refList[this.widget.options.name] = this
      }
    },

  }
}
