<template>
  <h3>死亡人数统计表</h3>
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
import {getPeopleInfo} from "../Utils/api";
import {reactive} from "vue";

export default {
  data() {
    return {
      columnNameArray: ["id", "location", "date", "number", "reportingUnit"],
      tableData: reactive([])
    }
  },
  created() {
    getPeopleInfo().then(res => {
      this.tableData = res
    })
  }
}
</script>

<style>

</style>
