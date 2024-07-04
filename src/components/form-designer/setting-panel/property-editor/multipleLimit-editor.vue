<template>
  <el-form-item :label="'多选数量限制'">
    <el-input-number v-model="optionModel.multipleLimit" :min="0"
                     class="hide-spin-button" style="width: 100%"></el-input-number>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "multipleLimit-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
