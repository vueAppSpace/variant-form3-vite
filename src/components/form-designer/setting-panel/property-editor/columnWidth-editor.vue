<template>
  <div>
    <el-form-item :label="'组件列宽'" v-show="!!subFormChildWidgetFlag">
      <el-input type="text" v-model="optionModel.columnWidth"></el-input>
    </el-form-item>
  </div>
</template>

<script>
  

  export default {
    name: "columnWidth-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        //subFormChildWidgetFlag: false,
        subFormChildWidgetFlag: true,
      }
    },
    created() {

    },
    mounted() {
      this.designer.handleEvent('field-selected', (parentWidget) => {
        this.subFormChildWidgetFlag = !!parentWidget && (parentWidget.type === 'sub-form');
        //console.log('subFormChildWidgetFlag', this.subFormChildWidgetFlag)
      })
    }
  }
</script>

<style scoped>

</style>
