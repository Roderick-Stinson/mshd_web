<template>
  <h3>死亡人数统计表</h3>

  <el-table
      :data="tableData"
      style="width: 100%">
          <el-table-column
              v-for="(item,index) in tableData"
              :key="index"
            :prop="columnNameArray[index]"
            label="编码"
            width="180">
          </el-table-column>
  </el-table>

</template>

<script>
// import {getPeopleInfo} from "../Utils/api";

export default {
  data() {
    return {
      test: 'id',
      columnNameArray: ["id", "location", "date", "number", "reportingUnit"],
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
      }]
    }
  },
  created() {
    // getPeopleInfo().then(res => {
    //   this.tableData = res
    //   console.log(res)
    // })
  }
}
</script>

<style>

</style>
