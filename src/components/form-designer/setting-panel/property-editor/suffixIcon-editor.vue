<template>
  <el-form-item :label="'尾部Icon'">
    <el-input type="text" v-model="optionModel.suffixIcon"></el-input>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "suffixIcon-editor",
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
