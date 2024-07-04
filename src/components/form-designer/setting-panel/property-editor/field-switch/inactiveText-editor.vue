<template>
  <el-form-item :label="'关闭时文字描述'">
    <el-input v-model="optionModel.inactiveText"></el-input>
  </el-form-item>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "inactiveText-editor",
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
