
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    let name = child.$options.componentName;
    if (name === componentName) {
      //child.$emit.apply(child, [eventName].concat(params));
      if (!!child.emit$) {
        child.emit$.call(child, eventName, params)
      }
    } else {
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}

//自定义了一个事件系统
export default {
  data() {
    return {
      vfEvents: {}
    }
  },

  methods: {
    //触发事件
    emit$(eventName, data) {
      if (this.vfEvents[eventName]) {
        this.vfEvents[eventName].forEach((fn) => {
          fn(data);
        });
      }
    },
    
    //事件绑定
    on$(eventName, fn) {
      this.vfEvents[eventName] = this.vfEvents[eventName] || [];
      this.vfEvents[eventName].push(fn);
    },
    
    //移除
    off$(eventName, fn) {
      if (this.vfEvents[eventName]) {
        if ((fn === undefined) || (fn === null)) {
          this.vfEvents[eventName].length = 0
          return
        }

        for (let i = 0; i < this.vfEvents[eventName].length; i++) {
          if (this.vfEvents[eventName][i] === fn) {
            this.vfEvents[eventName].splice(i, 1)
            break
          }
        }
      }
    },

    dispatch: function dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        if (!!parent.emit$) {
          parent.emit$.call(parent, eventName, params)

          if (componentName === 'VFormRender') {
            parent.$emit(eventName, ...params)  //执行原生$emit，以便可以用@进行声明式事件处理！！
          }
        }
      }
    },

    broadcast: function broadcast(componentName, eventName, params) {
      /* Vue3移除了$children属性，_broadcast方法已不能使用！！ */
      //_broadcast.call(this, componentName, eventName, params);

      if (!!this.widgetRefList) {  //FormRender只需遍历自身的widgetRefList属性
        Object.keys(this.widgetRefList).forEach(refName => {
          let cmpName = this.widgetRefList[refName].$options.componentName
          if (cmpName === componentName) {
            let foundRef = this.widgetRefList[refName]
            foundRef.emit$.call(foundRef, eventName, params)
          }
        })
      }

      if (!!this.refList) {  //其他组件遍历inject的refList属性
        Object.keys(this.refList).forEach(refName => {
          let cmpName = this.refList[refName].$options.componentName
          if (cmpName === componentName) {
            let foundRef = this.refList[refName]
            foundRef.emit$.call(foundRef, eventName, params)
          }
        })
      }
    }
  }
};
