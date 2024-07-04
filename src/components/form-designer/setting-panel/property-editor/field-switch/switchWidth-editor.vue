<template>
  <el-form-item :label="'开关宽度（像素）'">
    <el-input-number v-model="optionModel.switchWidth" style="width: 100%"></el-input-number>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "switchWidth-editor",
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
