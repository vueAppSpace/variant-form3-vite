<template>
  <el-form-item :label="'上传提示内容'">
    <el-input type="text" v-model="optionModel.uploadTip"></el-input>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "uploadTip-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },

  }
</script>

<style scoped>

</style>
