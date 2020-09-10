<template>
  <div class="login-container">
    <el-form>
      <div class="title-container">
        <h3>登录</h3>
      </div>
      <el-form-item>
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>
      <el-tooltip>
        <el-form-item>
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            tabindex="2"
            autocomplete="on"
          />
          <span class="show-pwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
      >登录</el-button>
      <div style="position:relative">
        <div class="tips">
          <span>Username : admin</span>
          <span>Password : any</span>
        </div>
        <div class="tips">
          <span style="margin-right:18px;">用户名 : 自己写</span>
          <span>密码 : 随便填</span>
        </div>

        <el-button class="thirdparty-button" type="primary" @click="showDialog=true">其他登录方式</el-button>
      </div>
    </el-form>
    <el-dialog title="其他登录方式" :visible.sync="showDialog">
      不能在本地模拟，所以请结合你自己的商业模拟! ! !
      <!-- <social-sign /> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validateUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能少于6位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capswordtip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>

<style lang="scss">
div {
  background-color: #f00;
}
</style>
