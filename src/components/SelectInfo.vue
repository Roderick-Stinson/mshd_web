<template>
  <div align="left">
    <el-form :label-position="labelPosition" label-width="80px" :model="form">

    <el-form-item label="城市">
      <el-radio-group v-model="city" size="mini" >
      <el-radio label="1" border>不限</el-radio>
      <el-radio label="2" border>北京</el-radio>
      <el-radio label="3" border>重庆</el-radio>
      <el-radio label="4" border>四川</el-radio>
      <el-radio label="5" border>上海</el-radio>
      <el-radio label="6" border>深圳</el-radio>
    </el-radio-group>
    </el-form-item>
     
    <el-form-item label="品牌">
        <el-radio-group v-model="brand" size="mini" >
      <el-radio label="1" border>不限</el-radio>
      <el-radio label="2" border>奔驰</el-radio>
      <el-radio label="3" border>宝马</el-radio>
      <el-radio label="4" border>凯迪拉克</el-radio>
      <el-radio label="5" border>路虎</el-radio>
      <el-radio label="6" border>长安</el-radio>
    </el-radio-group>
    </el-form-item>

    <el-form-item label="价格">
       <el-radio-group v-model="price" size="mini" >
      <el-radio label="1" border>不限</el-radio>
      <el-radio label="2" border>3万以下</el-radio>
      <el-radio label="3" border>3万-5万</el-radio>
      <el-radio label="4" border>5-10万</el-radio>
      <el-radio label="5" border>10-15万</el-radio>
      <el-radio label="6" border>15万-20万</el-radio>
      <el-radio label="7" border>20万以上</el-radio>
    </el-radio-group>
    </el-form-item>
 
  </el-form>

  </div>
   
</template>

<script>
  export default {
    data () {
      return {
        labelPosition:"right",
        city: '1',
        brand: '1',
        price:'1',

      };
    }
  }
</script>

<style>

</style>

