<template>
  <el-form-item :label="'字段标签对齐'">
    <el-radio-group v-model="optionModel.labelAlign" class="radio-group-custom">
      <el-radio-button label="label-left-align">
        居左</el-radio-button>
      <el-radio-button label="label-center-align">
        居中</el-radio-button>
      <el-radio-button label="label-right-align">
        居右</el-radio-button>
    </el-radio-group>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "sub-form-labelAlign-editor",
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
