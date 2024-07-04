<template>
  <div>
    <el-form-item label-width="0">
      <el-divider class="custom-divider">输入框按钮设置</el-divider>
    </el-form-item>
    <el-form-item :label="'添加后置按钮'">
      <el-switch v-model="optionModel.appendButton"></el-switch>
    </el-form-item>
  </div>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "appendButton-editor",
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
