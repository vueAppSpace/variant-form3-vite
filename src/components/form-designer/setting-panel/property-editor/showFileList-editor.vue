<template>
  <el-form-item :label="'显示文件列表'">
    <el-switch v-model="optionModel.showFileList"></el-switch>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "showFileList-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
