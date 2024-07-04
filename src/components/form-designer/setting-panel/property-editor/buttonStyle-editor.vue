<template>
  <el-form-item :label="'显示为按钮'">
    <el-switch v-model="optionModel.buttonStyle"></el-switch>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "buttonStyle-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
