<template>
  <el-form-item :label="'任意级节点可选'">
    <el-switch v-model="optionModel.checkStrictly"></el-switch>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "checkStrictly-editor",
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
