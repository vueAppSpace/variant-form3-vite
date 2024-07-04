<template>
  <el-form-item :label="'自动弹出选项'">
    <el-switch v-model="optionModel.automaticDropdown"></el-switch>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "automaticDropdown-editor",
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
