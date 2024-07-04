<template>
  <el-form-item :label="'显示类型'" v-if="selectedWidget.type === 'input'">
    <el-select v-model="optionModel.type">
      <el-option label="text" value="text"></el-option>
      <!-- 当input的type设置为number时，如果输入非数字字符，则v-model拿到的值为空字符串，无法实现输入校验！故屏蔽之！！ -->
      <!--
      <el-option label="number" value="number"></el-option>
      -->
      <el-option label="password" value="password"></el-option>
    </el-select>
  </el-form-item>
</template>

<script>
  

  export default {
    name: "type-editor",
    
    props: {
      designer: Object,
      selectedWidget: Object,
      optionModel: Object,
    },
    computed: {

    }
  }
</script>

<style lang="scss" scoped>

</style>
