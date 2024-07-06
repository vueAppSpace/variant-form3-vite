<template>
  <div class="toolbar-container">
    <div class="left-toolbar">
      <el-button link type="primary" :disabled="undoDisabled" :title="'撤销'" @click="undoHistory">
        <svg-icon icon-class="undo" /></el-button>
      <el-button link type="primary" :disabled="redoDisabled" :title="'重做'" @click="redoHistory">
        <svg-icon icon-class="redo" /></el-button>
      <el-button-group style="margin-left: 20px">
        <el-button :type="layoutType === 'PC' ? 'info': ''" @click="changeLayoutType('PC')">
          PC</el-button>
        <el-button :type="layoutType === 'Pad' ? 'info': ''" @click="changeLayoutType('Pad')">
          Pad</el-button>
        <el-button :type="layoutType === 'H5' ? 'info': ''" @click="changeLayoutType('H5')">
          H5</el-button>
      </el-button-group>
      <el-button style="margin-left: 20px" :title="'组件层次结构树'" @click="showNodeTreeDrawer">
        <svg-icon icon-class="node-tree" /></el-button>
    </div>

    <el-drawer :title="'组件层次结构树'" direction="ltr" v-model="showNodeTreeDrawerFlag" :modal="true" :size="280"
               :destroy-on-close="true" class="node-tree-drawer">
      <el-tree ref="nodeTree" :data="nodeTreeData" node-key="id" default-expand-all highlight-current class="node-tree"
               icon-class="el-icon-arrow-right" @node-click="onNodeTreeClick"></el-tree>
    </el-drawer>

    <div class="right-toolbar" :style="{width: toolbarWidth + 'px'}">
      <div class="right-toolbar-con">
        <el-button v-if="showToolButton('clearDesignerButton')" link type="primary" @click="clearFormWidget">
          <svg-icon icon-class="el-delete" />清空</el-button>
        <el-button v-if="showToolButton('previewFormButton')" link type="primary" @click="previewForm">
          <svg-icon icon-class="el-view" />预览</el-button>
        <el-button v-if="showToolButton('importJsonButton')" link type="primary" @click="importJson">
          导入JSON</el-button>
        <el-button v-if="showToolButton('exportJsonButton')" link type="primary" @click="exportJson">
          导出JSON</el-button>
        <template v-for="(idx, slotName) in $slots">
          <slot :name="slotName"></slot>
        </template>
      </div>
    </div>
    
    <!-- 预览弹窗 -->
    <div v-if="showPreviewDialogFlag" class="" v-drag="['.drag-dialog.el-dialog', '.drag-dialog .el-dialog__header']">
      <el-dialog :title="'预览'" v-model="showPreviewDialogFlag"
                 :show-close="true" :close-on-click-modal="false" :close-on-press-escape="false" center
                 :destroy-on-close="true" :append-to-body="true" class="drag-dialog small-padding-dialog" width="75%"
                 :fullscreen="(layoutType === 'H5') || (layoutType === 'Pad')">
        <div>
          <div class="form-render-wrapper" :class="[layoutType === 'H5' ? 'h5-layout' : (layoutType === 'Pad' ? 'pad-layout' : '')]">
            <VFormRender ref="preForm" :form-json="formJson" :form-data="testFormData" :preview-state="true"
                         :option-data="testOptionData" :global-dsv="designerDsv" @myEmitTest="onMyEmitTest"
                         @appendButtonClick="testOnAppendButtonClick" @buttonClick="testOnButtonClick"
                         @formChange="handleFormChange">
            </VFormRender>
          </div>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="getFormData">获取数据</el-button>
            <el-button type="primary" @click="resetForm">重置表单</el-button>
            <el-button type="primary" @click="setFormDisabled">禁用编辑</el-button>
            <el-button type="primary" @click="setFormEnabled">恢复编辑</el-button>
            <el-button @click="showPreviewDialogFlag = false">关闭</el-button>
          </div>
        </template>
      </el-dialog>
    </div>

    <div v-if="showImportJsonDialogFlag" class="" v-drag="['.drag-dialog.el-dialog', '.drag-dialog .el-dialog__header']">
      <el-dialog :title="'导入JSON'" v-model="showImportJsonDialogFlag"
                 :show-close="true" class="drag-dialog small-padding-dialog" :append-to-body="true" center
                 :close-on-click-modal="false" :close-on-press-escape="false" :destroy-on-close="true">
        <el-alert type="info" :title="'导入的JSON内容须符合下述格式，以保证顺利导入.'" show-icon class="alert-padding"></el-alert>
        <code-editor :mode="'json'" :readonly="false" v-model="importTemplate"></code-editor>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" @click="doJsonImport">
              导入</el-button>
            <el-button @click="showImportJsonDialogFlag = false">
              取消</el-button>
          </div>
        </template>
      </el-dialog>
    </div>

    <div v-if="showExportJsonDialogFlag" class="" v-drag="['.drag-dialog.el-dialog', '.drag-dialog .el-dialog__header']">
      <el-dialog :title="'导出JSON'" v-model="showExportJsonDialogFlag"
                 :show-close="true" class="drag-dialog small-padding-dialog" center append-to-body
                 :close-on-click-modal="false" :close-on-press-escape="false" :destroy-on-close="true">
        <code-editor :mode="'json'" :readonly="true" v-model="jsonContent"></code-editor>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" class="copy-json-btn" :data-clipboard-text="jsonRawContent" @click="copyFormJson">
              复制JSON</el-button>
            <el-button @click="showExportJsonDialogFlag = false">
              关闭</el-button>
          </div>
        </template>
      </el-dialog>
    </div>

    <div v-if="showFormDataDialogFlag" class="" v-drag="['.nested-drag-dialog.el-dialog', '.nested-drag-dialog .el-dialog__header']">
      <el-dialog :title="'表单数据'" v-model="showFormDataDialogFlag"
                 :show-close="true" class="nested-drag-dialog dialog-title-light-bg" center
                 :close-on-click-modal="false" :close-on-press-escape="false" :destroy-on-close="true"
                 :append-to-body="true">
        <div style="border: 1px solid #DCDFE6">
          <code-editor :mode="'json'" :readonly="true" v-model="formDataJson"></code-editor>
        </div>
        <template #footer>
          <div class="dialog-footer">
            <el-button type="primary" class="copy-form-data-json-btn" :data-clipboard-text="formDataRawJson" @click="copyFormDataJson">
              复制JSON</el-button>
            <el-button @click="showFormDataDialogFlag = false">
              关闭</el-button>
          </div>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
  import VFormRender from '@/components/form-render/index'
  import CodeEditor from '@/components/code-editor/index'
  import Clipboard from 'clipboard'
  import {
    deepClone,
    copyToClipboard,
    generateId,
    traverseAllWidgets, addWindowResizeHandler
  } from "@/utils/util"

  import axios from 'axios'
  import SvgIcon from "@/components/svg-icon/index";

  export default {
    name: "ToolbarPanel",
    
    components: {
      VFormRender,
      CodeEditor,
      Clipboard,
      SvgIcon,
    },
    props: {
      designer: Object,
      globalDsv: {
        type: Object,
        default: () => ({})
      },
    },
    inject: ['getDesignerConfig'],
    data() {
      return {
        designerConfig: this.getDesignerConfig(),

        toolbarWidth: 460,
        showPreviewDialogFlag: false,
        showImportJsonDialogFlag: false,
        showExportJsonDialogFlag: false,
        showExportCodeDialogFlag: false,
        showFormDataDialogFlag: false,
        showNodeTreeDrawerFlag: false,

        nodeTreeData: [],

        importTemplate: '',
        jsonContent: '',
        jsonRawContent: '',

        formDataJson: '',
        formDataRawJson: '',

        vueCode: '',
        htmlCode: '',
        
        testFormData: {
          // 'userName': '666888',
          // 'productItems': [
          //   {'pName': 'iPhone12', 'pNum': 10},
          //   {'pName': 'P50', 'pNum': 16},
          // ]

          'select62173': 2,
        },
        testOptionData: {
          'select62173': [
            {label: '01', value: 1},
            {label: '22', value: 2},
            {label: '333', value: 3},
          ],

          'select001': [
            {label: '辣椒', value: 1},
            {label: '菠萝', value: 2},
            {label: '丑橘子', value: 3},
          ],
        },

      }
    },
    computed: {
      formJson() {
        return {
          // widgetList: this.designer.widgetList,
          // formConfig: this.designer.formConfig

          widgetList: deepClone(this.designer.widgetList),
          formConfig: deepClone(this.designer.formConfig)
        }
      },

      undoDisabled() {
        return !this.designer.undoEnabled()
      },

      redoDisabled() {
        return !this.designer.redoEnabled()
      },

      layoutType() {
        return this.designer.getLayoutType()
      },

      designerDsv() {
        return this.globalDsv
      }

    },
    watch: {
      'designer.widgetList': {
        deep: true,
        handler(val) {
          //console.log('test-----', val)
          //this.refreshNodeTree()
        }
      },

    },
    mounted() {
      let maxTBWidth = this.designerConfig.toolbarMaxWidth || 460
      let minTBWidth = this.designerConfig.toolbarMinWidth || 300
      let newTBWidth = window.innerWidth - 260 - 300 - 320 - 80
      this.toolbarWidth = newTBWidth >= maxTBWidth ? maxTBWidth : (newTBWidth <= minTBWidth ? minTBWidth : newTBWidth)
      addWindowResizeHandler(() => {
        this.$nextTick(() => {
          let newTBWidth2 = window.innerWidth - 260 - 300 - 320 - 80
          this.toolbarWidth = newTBWidth2 >= maxTBWidth ? maxTBWidth : (newTBWidth2 <= minTBWidth ? minTBWidth : newTBWidth2)
        })
      })
    },
    methods: {
      showToolButton(configName) {
        if (this.designerConfig[configName] === undefined) {
          return true
        }

        return !!this.designerConfig[configName]
      },

      buildTreeNodeOfWidget(widget, treeNode) {
        let curNode = {
          id: widget.id,
          label: widget.options.label || widget.type,
          //selectable: true,
        }
        treeNode.push(curNode)

        if (widget.category === undefined) {
          return
        }

        curNode.children = []
        if (widget.type === 'grid') {
          widget.cols.map(col => {
            let colNode = {
              id: col.id,
              label: col.options.name || widget.type,
              children: []
            }
            curNode.children.push(colNode)
            col.widgetList.map(wChild => {
              this.buildTreeNodeOfWidget(wChild, colNode.children)
            })
          })
        } else if (widget.type === 'table') {
          //TODO: 需要考虑合并单元格！！
          widget.rows.map(row => {
            let rowNode = {
              id: row.id,
              label: 'table-row',
              selectable: false,
              children: [],
            }
            curNode.children.push(rowNode)

            row.cols.map(cell => {
              if (!!cell.merged) {  //跳过合并单元格！！
                return
              }

              let rowChildren = rowNode.children
              let cellNode = {
                id: cell.id,
                label: 'table-cell',
                children: []
              }
              rowChildren.push(cellNode)

              cell.widgetList.map(wChild => {
                this.buildTreeNodeOfWidget(wChild, cellNode.children)
              })
            })
          })
        } else if (widget.type === 'tab') {
          widget.tabs.map(tab => {
            let tabNode = {
              id: tab.id,
              label: tab.options.name || widget.type,
              selectable: false,
              children: []
            }
            curNode.children.push(tabNode)
            tab.widgetList.map(wChild => {
              this.buildTreeNodeOfWidget(wChild, tabNode.children)
            })
          })
        } else if (widget.type === 'sub-form') {
          widget.widgetList.map(wChild => {
            this.buildTreeNodeOfWidget(wChild, curNode.children)
          })
        } else if (widget.category === 'container') {  //自定义容器
          widget.widgetList.map(wChild => {
            this.buildTreeNodeOfWidget(wChild, curNode.children)
          })
        }
      },

      refreshNodeTree() {
        this.nodeTreeData.length = 0
        this.designer.widgetList.forEach(wItem => {
          this.buildTreeNodeOfWidget(wItem, this.nodeTreeData)
        })
      },

      showNodeTreeDrawer() {
        this.refreshNodeTree()
        this.showNodeTreeDrawerFlag = true
        this.$nextTick(() => {
          if (!!this.designer.selectedId) {  //同步当前选中组件到节点树！！！
            this.$refs.nodeTree.setCurrentKey(this.designer.selectedId)
          }
        })
      },

      undoHistory() {
        this.designer.undoHistoryStep()
      },

      redoHistory() {
        this.designer.redoHistoryStep()
      },

      changeLayoutType(newType) {
        this.designer.changeLayoutType(newType)
      },

      clearFormWidget() {
        this.designer.clearDesigner()
        this.designer.formWidget.clearWidgetRefList()
      },

      previewForm() {
        this.showPreviewDialogFlag = true
      },


      importJson() {
        this.importTemplate = JSON.stringify(this.designer.getImportTemplate(), null, '  ')
        this.showImportJsonDialogFlag = true
      },

      doJsonImport() {
        try {
          let importObj = JSON.parse(this.importTemplate)
          //console.log('test import', this.importTemplate)
          if (!importObj || !importObj.formConfig) {
            throw new Error( `无效的表单JSON格式` )
          }

          let fJsonVer = importObj.formConfig.jsonVersion
          if (!fJsonVer || (fJsonVer !== 3)) {
            throw new Error( '表单JSON版本号不匹配' )
          }

          this.designer.loadFormJson(importObj)

          this.showImportJsonDialogFlag = false
          this.$message.success('导入JSON成功')

          this.designer.emitHistoryChange()

          this.designer.emitEvent('form-json-imported', [])
        } catch(ex) {
          this.$message.error(ex + '')
        }
      },

      exportJson() {
        let widgetList = deepClone(this.designer.widgetList)
        let formConfig = deepClone(this.designer.formConfig)
        this.jsonContent = JSON.stringify({widgetList, formConfig}, null, '  ')
        this.jsonRawContent = JSON.stringify({widgetList, formConfig})
        this.showExportJsonDialogFlag = true
      },

      copyFormJson(e) {
        copyToClipboard(this.jsonRawContent, e,
            this.$message,
            '复制JSON成功',
            '复制JSON失败'
        )
      },

      getFormData() {
        this.$refs['preForm'].getFormData().then(formData => {
          this.formDataJson = JSON.stringify(formData, null, '  ')
          this.formDataRawJson = JSON.stringify(formData)

          this.showFormDataDialogFlag = true
        }).catch(error => {
          this.$message.error(error)
        })
      },

      copyFormDataJson(e) {
        copyToClipboard(this.formDataRawJson, e,
            this.$message,
            '复制JSON成功',
            '复制JSON失败'
        )
      },

      resetForm() {
        this.$refs['preForm'].resetForm()
      },

      setFormDisabled() {
        this.$refs['preForm'].disableForm()
      },

      setFormEnabled() {
        this.$refs['preForm'].enableForm()
      },

      handleFormChange(fieldName, newValue, oldValue, formModel) {
        /*
        console.log('---formChange start---')
        console.log('fieldName', fieldName)
        console.log('newValue', newValue)
        console.log('oldValue', oldValue)
        console.log('formModel', formModel)
        console.log('---formChange end---')
        */

        console.log('formModel', formModel)
      },

      testOnAppendButtonClick(clickedWidget) {
        console.log('test', clickedWidget)
      },

      testOnButtonClick(button) {
        console.log('test', button)
      },

      onMyEmitTest(aaa) {
        console.log('-----', aaa)
      },

      findWidgetById(wId) {
        let foundW = null
        traverseAllWidgets(this.designer.widgetList, (w) => {
          if (w.id === wId) {
            foundW = w
          }
        })

        return foundW
      },

      onNodeTreeClick(nodeData, node, nodeEl) {
        //console.log('test', JSON.stringify(nodeData))

        if ((nodeData.selectable !== undefined) && !nodeData.selectable) {
          this.$message.info('当前组件节点不可选择')
        } else {
          const selectedId = nodeData.id
          const foundW = this.findWidgetById(selectedId)
          if (!!foundW) {
            this.designer.setSelected(foundW)
          }
        }
      },

    }
  }
</script>

<style lang="scss" scoped>
  .toolbar-container:after {
    display: block;
    content: "";
    clear: both;
  }

  .left-toolbar {
    display: flex;
    margin-top: 4px;
    float: left;
    font-size: 16px;
  }

  .right-toolbar {
    display: flex;
    float: right;
    line-height: 42px;
    text-align: right;
    overflow: hidden;

    .right-toolbar-con {
      text-align: left;
      width: 600px;
    }

    :deep(.el-button) {
      margin-left: 10px;
    }

    :deep(.el-button--text) {
      font-size: 14px !important;
    }

    :deep(.svg-icon) {
      margin-left: 0;
      margin-right: 0.05em;
    }
  }

  .el-button i {
    margin-right: 3px;
  }

  .small-padding-dialog {
    :deep(.el-dialog__header) {
      //padding-top: 3px;
      //padding-bottom: 3px;
      background: #f1f2f3;
    }

    :deep(.el-dialog__body) {
      padding: 12px 15px 12px 15px;

      .el-alert.alert-padding {
        padding: 0 10px;
      }
    }

    :deep(.ace-container) {
      border: 1px solid #DCDFE6;
    }
  }

  .dialog-title-light-bg {
    :deep(.el-dialog__header) {
      background: #f1f2f3;
    }
  }

  .no-box-shadow {
    box-shadow: none;
  }

  .no-padding.el-tabs--border-card {
    :deep(.el-tabs__content) {
      padding: 0;
    }
  }

  .form-render-wrapper {
    //height: calc(100vh - 142px);
    //all: revert !important; /* 防止表单继承el-dialog等外部样式，未生效，原因不明？？ */
  }

  .form-render-wrapper.h5-layout {
    margin: 0 auto;
    width: 420px;
    border-radius: 15px;
    //border-width: 10px;
    box-shadow: 0 0 1px 10px #495060;
    height: calc(100vh - 175px);
    overflow-y: auto;
    overflow-x: hidden;
  }

  .form-render-wrapper.pad-layout {
    margin: 0 auto;
    width: 960px;
    border-radius: 15px;
    //border-width: 10px;
    box-shadow: 0 0 1px 10px #495060;
    height: calc(100vh - 175px);
    overflow-y: auto;
    overflow-x: hidden;
  }

  .node-tree-drawer {
    :deep(.el-drawer) {
      padding: 10px;
      overflow: auto;
    }

    :deep(.el-drawer__header) {
      margin-bottom: 12px;
      padding: 5px 5px 0;
    }

    :deep(.el-drawer__body) {
      padding-left: 5px;
    }
  }

  /*.node-tree-scroll-bar {*/
  /*  height: 100%;*/
  /*  overflow: auto;*/
  /*}*/

  :deep(.node-tree) {
    .el-tree > .el-tree-node:after {
      border-top: none;
    }
    .el-tree-node {
      position: relative;
      padding-left: 12px;
    }

    .el-tree-node__content {
      padding-left: 0 !important;
    }

    .el-tree-node__expand-icon.is-leaf{
      display: none;
    }

    .el-tree-node__children {
      padding-left: 12px;
      overflow: visible !important; /* 加入此行让el-tree宽度自动撑开，超出宽度el-draw自动出现水平滚动条！ */
    }

    .el-tree-node :last-child:before {
      height: 38px;
    }

    .el-tree > .el-tree-node:before {
      border-left: none;
    }

    .el-tree > .el-tree-node:after {
      border-top: none;
    }

    .el-tree-node:before {
      content: "";
      left: -4px;
      position: absolute;
      right: auto;
      border-width: 1px;
    }

    .el-tree-node:after {
      content: "";
      left: -4px;
      position: absolute;
      right: auto;
      border-width: 1px;
    }

    .el-tree-node:before {
      border-left: 1px dashed #4386c6;
      bottom: 0px;
      height: 100%;
      top: -10px;
      width: 1px;
    }

    .el-tree-node:after {
      border-top: 1px dashed #4386c6;
      height: 20px;
      top: 12px;
      width: 16px;
    }

    .el-tree-node.is-current > .el-tree-node__content {
      background: #c2d6ea !important;
    }

    .el-tree-node__expand-icon {
      margin-left: -3px;
      padding: 6px 6px 6px 0px;
      font-size: 16px;
    }

  }
</style>
