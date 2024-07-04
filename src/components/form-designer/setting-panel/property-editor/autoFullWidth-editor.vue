<template>
  <el-form-item :label="'自动拉伸宽度'">
    <el-switch v-model="optionModel.autoFullWidth"></el-switch>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "autoFullWidth-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
