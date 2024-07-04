<template>
  <el-form-item :label="'开启时背景色'">
    <el-color-picker v-model="optionModel.activeColor"></el-color-picker>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "activeColor-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
