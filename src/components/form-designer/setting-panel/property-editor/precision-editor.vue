<template>
  <el-form-item :label="'精度'">
    <el-input-number v-model="optionModel.precision" :min="0" class="hide-spin-button" style="width: 100%"></el-input-number>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "precision-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
