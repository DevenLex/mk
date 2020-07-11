<template>
  <div class="login">
    <!-- 登录表头 -->
    <van-nav-bar @click-left="back">
      <template #left>
        <van-icon name="arrow-left" size="30"></van-icon>
      </template>
    </van-nav-bar>
    <!-- 圆行头像框 -->
    <van-row type="flex" justify="center">
      <van-col span="8">
        <van-image
          class="vanbar"
          round
          width="8rem"
          height="8rem"
          fit="cover"
          :src="require('../assets/iconcolor/def-men.svg')"
        />
      </van-col>
    </van-row>

    <!-- 用户密码框 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="upwd"
        label="密码"
        placeholder="请输入6-12位密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <!-- 忘记密码 -->
      <a href="javascript:;" class="upwdforget">忘记密码</a>
      <router-link to="/register" class="registernow">
        马上注册
      </router-link>
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          native-type="submit"
          :disabled="!checked"
        >
          登录
        </van-button>
      </div>
    </van-form>
    <van-checkbox v-model="checked" checked-color="#ff9999" class="box-size">
      已阅读并同意<a href="javascript:;">《用户协议》</a>及<a
        href="javascript:;"
        >《用户隐私政策》</a
      >
    </van-checkbox>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      checked: false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      this.axios
        .get("http://127.0.0.1:6600/api/v1/login?uname=" + this.username + "&upwd=" + this.password)
        .then((res) => {
          console.log(res.data);
          this.$router.push("/");
        });
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.login .upwdforget {
  color: #c5c5c5;
  margin: 0 0 0 3em;
}
.login .registernow {
  color: #c5c5c5;
  margin: 0 0 0 40vw;
}
.login .vanbar {
  margin: 50px auto;
}
.login .box-size {
  margin-top: 1rem;
  padding-left: 1rem;
  font-size: 15px;
  font-weight: 700;
}
.van-hairline--bottom::after {
  border-bottom-width: 0;
}
</style>
