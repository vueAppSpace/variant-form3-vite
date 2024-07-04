<template>
  <div>
    <el-form-item :label="'内容区高度'">
      <el-input type="text" v-model="optionModel.contentHeight"></el-input>
    </el-form-item>
  </div>
</template>

<script>
  

  export default {
    name: "rich-editor-contentHeight-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
  }
</script>

<style scoped>

</style>
