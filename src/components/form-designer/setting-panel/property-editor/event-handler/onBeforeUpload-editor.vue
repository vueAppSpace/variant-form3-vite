<template>
  <el-form-item label="onBeforeUpload" label-width="150px">
    <el-button type="info" icon="Edit" plain round @click="editEventHandler('onBeforeUpload', eventParams)">
      编写代码</el-button>
  </el-form-item>
</template>

<script>
  
  import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin"

  export default {
    name: "onBeforeUpload-editor",
    mixins: [ eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: ['file'],
      }
    }
  }
</script>

<style scoped>

</style>
