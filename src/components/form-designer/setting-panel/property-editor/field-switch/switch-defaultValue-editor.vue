<template>
  <el-form-item :label="'默认值'">
    <el-switch v-model="optionModel.defaultValue" @change="emitDefaultValueChange"
               active-text="true" inactive-text="false"></el-switch>
  </el-form-item>
</template>

<script>
  
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "switch-defaultValue-editor",
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
