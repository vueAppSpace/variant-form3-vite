<template>
  <el-form-item :label="'显示完整路径'">
    <el-switch v-model="optionModel.showAllLevels"></el-switch>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "showAllLevels-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
