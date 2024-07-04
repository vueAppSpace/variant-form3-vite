<template>
  <el-form-item :label="'起始占位内容'">
    <el-input type="text" v-model="optionModel.startPlaceholder"></el-input>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "startPlaceholder-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
