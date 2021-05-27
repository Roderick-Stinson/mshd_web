
<template>
    <h3>死亡人数统计表</h3>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="Id"
        label="编码"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Location"
        label="死亡地点">
      </el-table-column>
      <el-table-column
        prop="Date"
        label="上报时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="Number"
        label="死亡人数"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ReportingUnit"
        label="上报单位"
        width="180">
      </el-table-column>
    </el-table>
  
</template>

<script>
import { getPeopleInfo } from '../Utils/people'
  export default {
      data() {
        return {
          tableData: []
        }
      },
      created() {
        getPeopleInfo().then(res => {
            this.tableData = res
            console.log(res);
          })
      }
    }
</script>

<style>

</style>
