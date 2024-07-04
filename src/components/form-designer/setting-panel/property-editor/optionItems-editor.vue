<template>
  <el-form-item label-width="0">
    <el-divider class="custom-divider-margin-top">选项设置</el-divider>
    <option-items-setting :designer="designer" :selected-widget="selectedWidget"></option-items-setting>
  </el-form-item>
</template>

<script>
  
  import OptionItemsSetting from "@/components/form-designer/setting-panel/option-items-setting"

  export default {
    name: "optionItems-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    components: {
      OptionItemsSetting,
    }
  }
</script>

<style scoped>

</style>
