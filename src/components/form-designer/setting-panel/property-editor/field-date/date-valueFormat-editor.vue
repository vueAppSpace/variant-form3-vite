<template>
  <el-form-item :label="'绑定值格式'">
    <el-select v-model="optionModel.valueFormat" filterable allow-create>
      <el-option label="YYYY-MM-DD" value="YYYY-MM-DD"></el-option>
      <el-option label="YYYY-MM-DD HH:mm:ss" value="YYYY-MM-DD HH:mm:ss"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "date-valueFormat-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
