<template>
  <el-form-item :label="'带有边框'">
    <el-switch v-model="optionModel.border"></el-switch>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "border-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
