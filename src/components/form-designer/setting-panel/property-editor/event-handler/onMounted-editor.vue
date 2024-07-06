<template>
  <el-form-item label="onMounted" label-width="150px">
    <el-button type="info" icon="Edit" plain round @click="editEventHandler('onMounted', eventParams)">
      编写代码</el-button>
  </el-form-item>
</template>

<script>
  
  import eventMixin from "@/components/form-designer/setting-panel/property-editor/event-handler/eventMixin"

  export default {
    name: "onMounted-editor",
    mixins: [ eventMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    data() {
      return {
        eventParams: [],
      }
    }
  }
</script>

<style scoped>

</style>
