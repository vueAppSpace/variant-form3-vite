<template>
  <el-form-item :label="'文字自动换行'">
    <el-switch v-model="optionModel.wordBreak"></el-switch>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "table-cell-wordBreak-editor",
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
