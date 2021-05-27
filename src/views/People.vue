
<template>
    <h3>死亡人数统计表</h3>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="location"
        label="死亡地点">
      </el-table-column>
      <el-table-column
        prop="date"
        label="上报时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="number"
        label="死亡人数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="reportingUnit"
        label="上报单位"
        width="180">
      </el-table-column>
    </el-table>
  
</template>

<script>
  export default {
      data() {
        return {
          tableData: [{
            id:'001',
            location:'学二503',
            date:'2016-05-04-16:44',
            number:'2',
            reportingUnit:'bupt'
          }, {
            id:'001',
            location:'学二503',
            date:'2016-05-04-16:44',
            number:'2',
            reportingUnit:'bupt'
          },{
            id:'001',
            location:'学二503',
            date:'2016-05-04-16:44',
            number:'2',
            reportingUnit:'bupt'
          },{
            id:'001',
            location:'学二503',
            date:'2016-05-04-16:44',
            number:'2',
            reportingUnit:'bupt'
          },{
            id:'001',
            location:'学二503',
            date:'2016-05-04-16:44',
            number:'2',
            reportingUnit:'bupt'
          },]
        }
      }
    }
</script>

<style>

</style>
