<template>
  <el-form-item :label="'选项可多选'">
    <el-switch v-model="optionModel.multiple"></el-switch>
  </el-form-item>
</template>

<script>
  
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "cascader-multiple-editor",
    mixins: [ propertyMixin],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
