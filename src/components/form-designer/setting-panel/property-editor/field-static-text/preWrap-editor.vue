<template>
  <el-form-item :label="'自动换行'">
    <el-switch v-model="optionModel.preWrap"></el-switch>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "static-text-preWrap-editor",
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
