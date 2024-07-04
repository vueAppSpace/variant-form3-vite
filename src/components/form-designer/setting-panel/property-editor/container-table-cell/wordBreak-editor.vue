<template>
  <el-form-item :label="'文字自动换行'">
    <el-switch v-model="optionModel.wordBreak"></el-switch>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "table-cell-wordBreak-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
