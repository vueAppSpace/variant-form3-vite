<template>
  <el-form-item :label="'标签宽度'">
    <el-input type="number" v-model="optionModel.labelWidth" @input="inputNumberHandler"
              min="0" class="hide-spin-button"></el-input>
  </el-form-item>
</template>

<script>
  
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "labelWidth-editor",
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
