<template>
  <el-form-item :label="'允许创建选项'">
    <el-switch v-model="optionModel.allowCreate"></el-switch>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "allowCreate-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },

  }
</script>

<style scoped>

</style>
