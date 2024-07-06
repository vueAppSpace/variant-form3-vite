import emitter from '@/utils/emitter'

//通过一个函数动态产生组件定义选项
export const createInputTextEditor = function (propName, propLabelKey) {
  return {
    props: {
      optionModel: Object,
    },
    //用于编程式地创建组件虚拟DOM树的函数
    //是对template的一种替代解决方案，使你可以用js更灵活的声明组件渲染输出
    render(h) {
      return (
        <el-form-item label={propLabelKey}>
          <el-input type="text" v-model={this.optionModel[propName]} />
        </el-form-item>
      )
    }
  }
}

export const createInputNumberEditor = function (propName, propLabelKey) {
  return {
    props: {
      optionModel: Object,
    },
    methods: {
      updateValue(newValue) {
        if ((newValue === undefined) || (newValue === null) || isNaN(newValue)) {
          this.optionModel[propName] = null
        } else {
          this.optionModel[propName] = Number(newValue)
        }
      },
    },
    render(h) {
      return (
          <el-form-item label={propLabelKey}>
            <el-input-number type="text" v-model={this.optionModel[propName]}
                             onChange={this.updateValue} style="width: 100%" />
          </el-form-item>
      )
    }
  }
}

//动态创建一个组件定义
export const createBooleanEditor = function (propName, propLabelKey) {
  return {
    props: {
      optionModel: Object,
    },
    render(h) {
      return (
        <el-form-item label={propLabelKey}>
          <el-switch v-model={this.optionModel[propName]} />
        </el-form-item>
      )
    }
  }
}

export const createCheckboxGroupEditor = function (propName, propLabelKey, configs) {
  return {
    props: {
      optionModel: Object,
    },
    render(h) {
      return (
        <el-form-item label={propLabelKey}>
          <el-checkbox-group v-model={this.optionModel[propName]}>
            {
              configs.optionItems.map(item => {
                return <el-checkbox label={item.label} value={item.value}/>
              })
            }
          </el-checkbox-group>
        </el-form-item>
      )
    }
  }
}


export const createRadioGroupEditor = function (propName, propLabelKey, configs) {
  return {
    props: {
      optionModel: Object,
    },
    render(h) {
      return (
        <el-form-item label={propLabelKey}>
          <el-radio-group v-model={this.optionModel[propName]}>
            {
              configs.optionItems.map(item => {
                return <el-radio value={item.value} label={item.label}/>
              })
            }
          </el-radio-group>
        </el-form-item>
      )
    }
  }
}

export const createRadioButtonGroupEditor = function (propName, propLabelKey, configs) {
  return {
    props: {
      optionModel: Object,
    },
    render(h) {
      return (
          <el-form-item label={propLabelKey}>
            <el-radio-group v-model={this.optionModel[propName]}>
              {
                configs.optionItems.map(item => {
                  return <el-radio-button value={item.value} label={item.label} />
                })
              }
            </el-radio-group>
          </el-form-item>
      )
    }
  }
}

export const createSelectEditor = function (propName, propLabelKey, configs) {
  return {
    props: {
      optionModel: Object,
    },
    render(h) {
      return (
        <el-form-item label={propLabelKey}>
          <el-select v-model={this.optionModel[propName]}>
            {
              configs.optionItems.map(item => {
                return <el-option label={item.label} value={item.value} />
              })
            }
          </el-select>
        </el-form-item>
      )
    }
  }
}

export const createEventHandlerEditor = function (eventPropName, eventParams) {
  return {
    props: {
      optionModel: Object,
    },
    mixins: [emitter],
    methods: {
      editEventHandler() {
        this.dispatch('SettingPanel', 'editEventHandler', [eventPropName, [...eventParams]])
      },
    },
    render(h) {
      return (
        <el-form-item label={eventPropName} label-width="150px">
            <el-button type="info" icon="Edit" plain round onClick={this.editEventHandler}>
              编写代码
            </el-button>
        </el-form-item>
      )
    }
  }
}

export const createEmptyEditor = function () {
  return {
    render() {
      return <div style="display: none" />
    }
  }
}

