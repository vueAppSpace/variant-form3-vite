<template>
  <el-form-item :label="'字段标签对齐'">
    <el-radio-group v-model="optionModel.labelAlign" class="radio-group-custom">
      <el-radio-button value="label-left-align" label="居左"/>
      <el-radio-button value="label-center-align" label="居中"/>
      <el-radio-button value="label-right-align" label="居右"/>
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
