import {
  addContainerWidgetSchema,
  addCustomWidgetSchema
} from '@/components/form-designer/widget-panel/widgetsConfig'
import * as PERegister from '@/components/form-designer/setting-panel/propertyRegister'
import * as PEFactory from '@/components/form-designer/setting-panel/property-editor-factory.jsx'

import {cardSchema} from "@/extension/samples/extension-schema"
import CardWidget from '@/extension/samples/card/card-widget'
import CardItem from '@/extension/samples/card/card-item'

import {alertSchema} from "@/extension/samples/extension-schema"
import AlertWidget from '@/extension/samples/alert/alert-widget'

export const loadExtension = function (app) {

  /**
   * 加载容器组件步骤：
   * 1. 加载组件Json Schema;
   * 2. 全局注册容器组件，容器组件有两种状态——设计期和运行期，故需要注册两个组件；
   * 3. 全局注册属性编辑器组件（基本属性、高级属性、事件属性）；
   * 4. 加载完毕。
   */
  addContainerWidgetSchema(cardSchema)  //加载组件Json Schema
  /* -------------------------------------------------- */
  app.component(CardWidget.name, CardWidget)  //注册设计期的容器组件
  app.component(CardItem.name, CardItem)  //注册运行期的容器组件
  /* -------------------------------------------------- */
  PERegister.registerCPEditor(app, 'card-folded', 'card-folded-editor',
      PEFactory.createBooleanEditor('folded', '是否收起'))

  PERegister.registerCPEditor(app, 'card-showFold', 'card-showFold-editor',
      PEFactory.createBooleanEditor('showFold', '显示折叠按钮'))

  PERegister.registerCPEditor(app, 'card-cardWidth', 'card-cardWidth-editor',
      PEFactory.createInputTextEditor('cardWidth', '卡片宽度'))

  let shadowOptions = [
    {label: 'never', value: 'never'},
    {label: 'hover', value: 'hover'},
    {label: 'always', value: 'always'},
  ]
  PERegister.registerCPEditor(app, 'card-shadow', 'card-shadow-editor',
      PEFactory.createSelectEditor('shadow', '显示阴影',
          {optionItems: shadowOptions}))
  /* -------------------------------------------------- */
  /* -------------------------------------------------- */
  /* 容器组件加载完毕 end */

  /**
   * 加载字段组件步骤：
   * 1. 加载组件Json Schema;
   * 2. 全局注册字段组件，字段组件设计期和运行期共用，故仅需注册一个组件；
   * 3. 全局注册属性编辑器组件（基本属性、高级属性、事件属性）；
   * 4. 注册字段组件的代码生成器；
   * 5. 加载完毕。
   */
  addCustomWidgetSchema(alertSchema)  //加载组件Json Schema
  /* -------------------------------------------------- */
  app.component(AlertWidget.name, AlertWidget)  //注册组件
  /* -------------------------------------------------- */
  PERegister.registerCPEditor(app, 'alert-title', 'alert-title-editor',
      PEFactory.createInputTextEditor('title', '标题'))

  let typeOptions = [
    {label: 'success', value: 'success'},
    {label: 'warning', value: 'warning'},
    {label: 'info', value: 'info'},
    {label: 'error', value: 'error'},
  ]
  // PERegister.registerCPEditor(app, 'alert-type', 'alert-type-editor',
  //     PEFactory.createSelectEditor('type', '类型',
  //         {optionItems: typeOptions}))
  /* type属性映射已存在，无须再注册，故只需注册属性编辑器即可！！ */
  app.component('alert-type-editor',
      PEFactory.createSelectEditor('type', '类型',
          {optionItems: typeOptions}))

  PERegister.registerCPEditor(app, 'alert-description', 'alert-description-editor',
      PEFactory.createInputTextEditor('description', '辅助性文字'))

  PERegister.registerCPEditor(app, 'alert-closable', 'alert-closable-editor',
      PEFactory.createBooleanEditor('closable', '是否可关闭'))

  PERegister.registerCPEditor(app, 'alert-closeText', 'alert-closeText-editor',
      PEFactory.createInputTextEditor('closeText', '关闭按钮文字'))

  PERegister.registerCPEditor(app, 'alert-center', 'alert-center-editor',
      PEFactory.createBooleanEditor('center', '文字居中'))

  PERegister.registerCPEditor(app, 'alert-showIcon', 'alert-showIcon-editor',
      PEFactory.createBooleanEditor('showIcon', '显示图标'))

  let effectOptions = [
    {label: 'light', value: 'light'},
    {label: 'dark', value: 'dark'},
  ]
  PERegister.registerCPEditor(app, 'alert-effect', 'alert-effect-editor',
      PEFactory.createRadioButtonGroupEditor('effect', '显示效果',
          {optionItems: effectOptions}))

  PERegister.registerEPEditor(app, 'alert-onClose', 'alert-onClose-editor',
      PEFactory.createEventHandlerEditor('onClose', []))
  /* 字段组件加载完毕 end */
}
