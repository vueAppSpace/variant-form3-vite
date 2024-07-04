<template>
  <el-form-item :label="'高度'">
    <el-input type="text" v-model="optionModel.cellHeight"></el-input>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "cellHeight-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
