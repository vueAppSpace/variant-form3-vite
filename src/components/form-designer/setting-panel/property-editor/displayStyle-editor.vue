<template>
  <el-form-item :label="'显示样式'">
    <el-radio-group v-model="optionModel.displayStyle">
      <el-radio value="inline" label="行内">
      <el-radio value="block" label="块">
    </el-radio-group>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "displayStyle-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
