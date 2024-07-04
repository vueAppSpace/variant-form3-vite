<template>
  <el-form-item :label="'允许半选'">
    <el-switch v-model="optionModel.allowHalf"></el-switch>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "allowHalf-editor",
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
