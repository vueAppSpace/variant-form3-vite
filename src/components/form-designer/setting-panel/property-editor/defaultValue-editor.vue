<template>
  <el-form-item v-if="!hasConfig('optionItems')" :label="'默认值'">
    <el-input type="text" v-model="optionModel.defaultValue"
              @change="emitDefaultValueChange"></el-input>
  </el-form-item>
</template>

<script>
  
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "defaultValue-editor",
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
