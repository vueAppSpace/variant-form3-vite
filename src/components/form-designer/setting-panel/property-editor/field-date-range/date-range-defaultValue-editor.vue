<template>
  <el-form-item :label="'默认值'">
    <el-date-picker :type="optionModel.type" v-model="optionModel.defaultValue" @change="emitDefaultValueChange"
                    :format="optionModel.format" :value-format="optionModel.valueFormat" style="width: 100%">
    </el-date-picker>
  </el-form-item>
</template>

<script>
  
  import propertyMixin from "@/components/form-designer/setting-panel/property-editor/propertyMixin"

  export default {
    name: "date-range-defaultValue-editor",
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
