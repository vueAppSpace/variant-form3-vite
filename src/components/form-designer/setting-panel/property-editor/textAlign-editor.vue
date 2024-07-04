<template>
  <el-form-item :label="'文字对齐'" v-if="(selectedWidget.type === 'static-text')">
    <el-radio-group v-model="optionModel.textAlign" class="radio-group-custom">
      <el-radio-button label="left">
        居左</el-radio-button>
      <el-radio-button label="center">
        居中</el-radio-button>
      <el-radio-button label="right">
        居右</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "textAlign-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style lang="scss" scoped>
  .radio-group-custom {
    :deep(.el-radio-button__inner) {
      padding-left: 12px;
      padding-right: 12px;
    }
  }
</style>
