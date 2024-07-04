<template>
  <el-form-item :label="'增减步长'">
    <el-input-number v-model="optionModel.step" class="hide-spin-button" style="width: 100%"></el-input-number>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "step-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
