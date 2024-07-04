<template>
  <el-form-item :label="'显示样式'">
    <el-radio-group v-model="optionModel.displayStyle">
      <el-radio label="inline">行内</el-radio>
      <el-radio label="block">块</el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "displayStyle-editor",
    mixins: [i18n],
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
