<template>
  <el-form-item :label="'头部Icon'">
    <el-input type="text" v-model="optionModel.prefixIcon"></el-input>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "prefixIcon-editor",
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
