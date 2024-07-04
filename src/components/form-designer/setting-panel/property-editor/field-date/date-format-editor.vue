<template>
  <el-form-item :label="'显示格式'">
    <el-select v-model="optionModel.format" filterable allow-create>
      <el-option label="YYYY-MM-DD" value="YYYY-MM-DD"></el-option>
      <el-option label="YYYY/MM/DD" value="YYYY/MM/DD"></el-option>
      <el-option label="YYYY年MM月DD日" value="YYYY年MM月DD日"></el-option>
      <el-option label="YYYY-MM-DD HH:mm:ss" value="YYYY-MM-DD HH:mm:ss"></el-option>
      <el-option label="YYYY-MM-DD hh:mm:ss" value="YYYY-MM-DD hh:mm:ss"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "date-format-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },

  }
</script>

<style scoped>

</style>
