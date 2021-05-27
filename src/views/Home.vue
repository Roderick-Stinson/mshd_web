<template>
  <div>
    <el-header>
        <navi-bar />
    </el-header>
  </div>
</template>

<script>
// @ is an alias to /src
import NaviBar from "../components/NaviBar";

export default {
  name: "Home",
  components: {
    NaviBar,
  },
  setup() {},
};
</script>

<style>

</style>