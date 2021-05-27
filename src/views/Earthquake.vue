<template>
  <h3>基本震情</h3>
  <div v-if="tableData.length > 0">
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          v-for="item in columnNameArray"
          :key="item"
          :prop="item"
          :label="item"
          width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

import {reactive} from "vue";

export default {
  data() {
    return {
      columnNameArray: ["d_id","id", "location", "date", "longitude","latitude", "depth","magnitude","picture","reporting unit"],
      tableData: reactive([])
    }
  },
  created() {
    // getPeopleInfo().then(res => {
    //   this.tableData = res
    // })
  }
}
</script>

<style>

</style>
