<template>
  <div class="register">
    <!-- 注册登录表头 -->
    <van-nav-bar @click-left="back">
      <template #left>
        <van-icon name="arrow-left" size="30"></van-icon>
      </template>
    </van-nav-bar>

    <!-- 注册信息 -->
    <van-form
      label-width="70"
      validate-first
      @failed="onFailed"
      @submit="onSubmit"
    >
      <!-- 头像上传 -->
      <!-- <van-uploader v-model="fileList" multiple :max-count="1" class="photo">
        <van-row type="flex" justify="center">
          <van-col>
            <van-image
              round
              width="8rem"
              height="8rem"
              fit="cover"
              :src="require('../assets/iconcolor/tato.svg')"
            />
          </van-col>
        </van-row>
      </van-uploader> -->

  <van-field name="uploader">
    <template #input>
      <van-uploader v-model="uploader" multiple :max-count="1" class="photo">
        <van-row type="flex" justify="center">
          <van-col>
            <van-image
              round
              width="8rem"
              height="8rem"
              fit="cover"
              :src="require('../assets/iconcolor/tato.svg')"
            />
          </van-col>
        </van-row>
      </van-uploader>
      
    </template>
  </van-field>

      <!-- 用户名 -->
      <van-field
        v-model="uname"
        name="uname"
        label="用户名称"
        placeholder="用户名不超过10位"
        @blur="unameTest"
      />
      <div v-if="isShow" class="Msg">{{ msg }}</div>
      <!-- 用户密码 -->
      <van-field
        v-model="upwd"
        name="upwd"
        type="password"
        label="输入密码"
        placeholder="由16位字母，数字或下划线组成"
        :rules="[{ validator, message: '由16位字母，数字或下划线组成' }]"
      />
      <!-- 确认密码 -->
      <van-field
        v-model="cpwd"
        name="cpwd"
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        @blur="cpwdTest"
      />
      <div v-if="isCpwd" class="Msg">{{ upwdMsg }}</div>
      <!-- 手机号 -->
      <van-field
        v-model="phone"
        name="phone"
        label="手机号码"
        type="tel"
        placeholder="请输入您的手机号"
        @blur="phoneReg(phone)"
      />
      <div class="Msg" v-if="isPhone">{{ phoneTest }}</div>
      <!-- 邮箱 -->
      <van-field
        v-model="email"
        name="email"
        type="tel"
        label="电子邮箱"
        placeholder="请输入您的邮箱"
        @blur="emailText(email)"
      />
      <div v-if="isEmail" class="Msg">{{ emailMsg }}</div>
      <!-- button -->
      <div class="btn">
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploader:[],
      uname: "",
      upwd: "",
      cpwd: "",
      phone: "",
      email: "",
      isShow: false,
      msg: "用户名被占用",
      isCpwd: false,
      upwdMsg: "密码不一致",
      isEmail: false,
      emailMsg: "请输入正确的邮箱",
      isPhone: false,
      phoneTest: "请输入正确的手机格式",
    };
  },
  methods: {
    // 手机验证
    phoneReg(phone) {
      if (phone) {
        let regStr = /^1[3-9]\d{9}$/g;
        if (!regStr.test(phone)) {
          this.isPhone = true;
        } else {
          this.isPhone = false;
        }
      } else {
        this.isPhone = false;
      }
    },
    // 邮箱验证
    emailText(email) {
      if (email) {
        let regStr = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/g;
        if (!regStr.test(email)) {
          this.isEmail = true;
        } else {
          this.isEmail = false;
        }
      } else {
        this.isEmail = false;
      }
    },
    // 校验密码是否一致
    cpwdTest() {
      if (this.upwd === this.cpwd) {
        this.isCpwd = false;
      } else {
        this.isCpwd = true;
      }
    },
    // 校验用户密码
    validator(val) {
      return /^[a-z\w]{6,16}$/.test(val);
    },
    // 校验用户名是否重复
    unameTest() {
      if (this.uname) {
        this.axios.get("http://127.0.0.1:6600/api/v1/uname?uname=" + this.uname).then((res) => {
          if (res.data == 0) {
            this.isShow = false;
          } else {
            this.isShow = true;
          }
        });
      } else {
        this.isShow = true;
        this.msg = "用户名不能为空";
      }
    },
    // 发送注册请求
    onSubmit(values) {
      console.log("submit", values);
      let params={
        uname:this.uname,
        upwd:this.upwd,
        phone:this.phone,
        email:this.email,
        photoImg:this.uploader
      };
      this.axios.post("http://127.0.0.1:6600/api/v1/register",this.qs.stringify(params)).then((res) => {
        console.log(res.data);
      });
    },
    onFailed(errorInfo) {
      this.isShow = true;
      this.msg = "用户名不能为空";
      this.$toast.fail("请正确填写注册信息");
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.register .photo {
  margin: 5vh 34vw;
}
.register .btn {
  margin: 16px;
  margin-top: 2.5rem;
}
.van-hairline--bottom::after {
  border-bottom-width: 0;
}
.van-field__control {
  padding-left: 3em;
}
.Msg {
  font-size: 2vw;
  color: red;
  margin: 0 0 0 24vw;
}
</style>
