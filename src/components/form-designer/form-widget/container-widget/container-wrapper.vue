<!--
/**
 * author: vformAdmin
 * email: vdpadmin@163.com
 * website: https://www.vform666.com
 * date: 2021.08.18
 * remark: 如果要分发VForm源码，需在本文件顶部保留此文件头信息！！
 */
-->

<template>
  <div class="container-wrapper" :class="[customClass]">
    <slot></slot>

    <div class="container-action" v-if="designer.selectedId === widget.id && !widget.internal">
      <i :title="'选中父组件'" @click.stop="selectParentWidget(widget)">
        <svg-icon icon-class="el-back" />
      </i>
      <i v-if="!!parentList && (parentList.length > 1)" :title="'上移组件'"
         @click.stop="moveUpWidget()"><svg-icon icon-class="el-move-up" /></i>
      <i v-if="!!parentList && (parentList.length > 1)" :title="'下移组件'"
         @click.stop="moveDownWidget()"><svg-icon icon-class="el-move-down" /></i>
      <i v-if="widget.type === 'table'" :title="'插入新行'"
         @click.stop="appendTableRow(widget)"><svg-icon icon-class="el-insert-row" /></i>
      <i v-if="widget.type === 'table'" :title="'插入新列'"
         @click.stop="appendTableCol(widget)"><svg-icon icon-class="el-insert-column" /></i>
      <i v-if="(widget.type === 'grid') || (widget.type === 'table')" :title="'复制组件'"
         @click.stop="cloneContainer(widget)"><svg-icon icon-class="el-clone" /></i>
      <i :title="'移除组件'" @click.stop="removeWidget">
        <svg-icon icon-class="el-delete" />
      </i>
    </div>

    <div class="drag-handler" v-if="designer.selectedId === widget.id && !widget.internal">
      <i :title="'拖拽手柄'"><svg-icon icon-class="el-drag-move" /></i>
      <i>{{PageTextMap.designer.widgetLabel[widget.type]}}</i>
      <i v-if="widget.options.hidden === true"><svg-icon icon-class="el-hide" /></i>
    </div>
  </div>
</template>

<script>
  
  import containerMixin from "@/components/form-designer/form-widget/container-widget/containerMixin";
  import SvgIcon from '@/components/svg-icon'
  import PageTextMap from "@/lang/zh-CN"

  export default {
    name: "container-wrapper",
    mixins: [containerMixin],
    components: {
      SvgIcon
    },
    props: {
      widget: Object,
      parentWidget: Object,
      parentList: Array,
      indexOfParentList: Number,
      designer: Object,
    },
    data(){
      return {
        PageTextMap
      } 
    },
    computed: {
      customClass() {
        return !!this.widget.options.customClass ? this.widget.options.customClass.join(' ') : ''
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container-wrapper {
    position: relative;
    margin-bottom: 5px;

    .container-action{
      position: absolute;
      //bottom: -30px;
      bottom: 0;
      right: -2px;
      height: 28px;
      line-height: 28px;
      background: $--color-primary;
      z-index: 999;

      i {
        font-size: 14px;
        color: #fff;
        margin: 0 5px;
        cursor: pointer;
      }
    }

    .drag-handler {
      position: absolute;
      top: -2px;
      //bottom: -24px;  /* 拖拽手柄位于组件下方，有时无法正常拖动，原因未明？？ */
      left: -2px;
      height: 22px;
      line-height: 22px;
      background: $--color-primary;
      z-index: 9;

      i {
        font-size: 14px;
        font-style: normal;
        color: #fff;
        margin: 4px;
        cursor: move;
      }
    }

  }

  .container-action, .drag-handler {
    :deep(.svg-icon) {
      margin-left: 0.1em;
      margin-right: 0.1em;
    }
  }

</style>
