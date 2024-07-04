<template>
  <el-form-item :label="'文件大小限制(MB)'">
    <el-input-number v-model="optionModel.fileMaxSize" :min="1" class="hide-spin-button" style="width: 100%"></el-input-number>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "fileMaxSize-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
