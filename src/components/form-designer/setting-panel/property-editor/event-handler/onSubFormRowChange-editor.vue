<template>
  <el-form-item label="onSubFormRowChange" label-width="150px">
    <el-button type="info" icon="Edit" plain round @click="editEventHandler('onSubFormRowChange', eventParams)">
      编写代码</el-button>
  </el-form-item>
</template>

<script>
  
  import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin"

  export default {
    name: "onSubFormRowChange-editor",
    mixins: [ eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['subFormData'],
      }
    }
  }
</script>

<style scoped>

</style>
