<template>
  <div>
    <el-form-item label-width="0">
      <el-divider class="custom-divider">定制字段标签</el-divider>
    </el-form-item>
    <el-form-item :label="'标签Icon样式'">
      <el-input type="text" v-model="optionModel.labelIconClass"></el-input>
    </el-form-item>
  </div>
</template>

<script>
  import i18n from "@/utils/i18n"

  export default {
    name: "labelIconClass-editor",
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
