<template>
  <div style="position: relative;">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      router mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="/Main" >首页</el-menu-item>
      <el-menu-item index="/People" >人员伤亡及失踪</el-menu-item>
      <el-menu-item index="/House" >房屋破坏</el-menu-item>
      <el-menu-item index="/Lifeline" >生命线灾情</el-menu-item>
      <el-menu-item index="/Secdisaster" >次生灾害</el-menu-item>
      <el-menu-item index="/Earthquake" >震情</el-menu-item>
      
    </el-menu>

    <el-button
      size="mini"
      style="position: absolute;right:10px;top:15px;"
      type="text"
      @click="dialogVisible = true"
      >登录</el-button>

    <el-dialog
      title="登录"
      v-model="dialogVisible"
      width="30%"
      :before-close="LoginDialog"
    >
      <el-form ref="user" :model="loginData" label-width="80px">
        <el-form-item label="用户名">
          <el-input @input="forceUpdate" v-model="this.loginData.username" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginData.password" type="password"/>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="loginFun"
            >确 定</el-button
          >
        </span>
      </template>
    </el-dialog>
    <el-main><router-view></router-view></el-main>
  </div>
</template>

<script>
import {reactive} from "vue";
import {ElMessage} from "element-plus";
import { login } from "../Utils/login";
import router from "../router/index";

export default {
  data() {
    return {
      activeIndex: "Main",
      dialogVisible: false,
      loginData: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    forceUpdate() {
      this.$forceUpdate()
    },
    loginFun () {
      //先判断账号密码是否填写
      if (!this.loginData.username) {
        ElMessage.error("请先填写账号");
        return;
      }
      if (!this.loginData.password) {
        ElMessage.error("请先填写密码");
        return;
      }

      let data = reactive(new URLSearchParams())
      // 传递参数
      data.append("username", this.loginData.username)
      data.append("password", this.loginData.password)

      // 执行登陆操作
      login(data).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.dialogVisible = false
          router.push("/home")
        } else{
          ElMessage.error("账号或密码错误，请重新输入");}
      })
      .catch((error) => {
        console.log(error);
        ElMessage.error("网络链接问题");
      });
    },
    

     routeToHome() {
      router.push("/home");
    },

    routeToLogin() {
      router.push("/login");
    },

    routeToSell() {
      router.push("/sell");
    },

  },
};
</script>

<style>

</style>
