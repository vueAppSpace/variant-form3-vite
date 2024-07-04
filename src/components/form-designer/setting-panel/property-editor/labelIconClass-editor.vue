<template>
  <div>
    <el-form-item label-width="0">
      <el-divider class="custom-divider">定制字段标签</el-divider>
    </el-form-item>
    <el-form-item :label="'标签Icon样式'">
      <el-input type="text" v-model="optionModel.labelIconClass"></el-input>
    </el-form-item>
  </div>
</template>

<script>
  

  export default {
    name: "labelIconClass-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
