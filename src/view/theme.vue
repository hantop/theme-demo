<template>
  <div class="theme">
      <div class="form">
        <div class="box">
          <div class="phone-box">
             <img src="" class="person-icon">
             <input type="tel" placeholder="请输入您的手机号" maxlength="11" v-model="telephone">
           </div>

          <div class="verifycode-box clearfix">
             <img src="" class="phone-icon">
             <input type="tel" placeholder="请输入验证码" maxlength="6">
             <!-- <countDownBtn v-on:send="getPhone()" ref="countDownBtn"></countDownBtn> -->
             <countDownBtn :second='10' v-on:send="getCode" ref="countDownBtn"></countDownBtn>
          </div>

           <!-- <div class="password-box">
             <img src="" class="lock-icon">
             <input type="text" placeholder="请设置6~12位登录密码" maxlength="12" v-model="password">
           </div> -->

        </div>

        <div class="opt">
           <!-- 急速借款 -->
           <button type="button" class="sure-btn" @click="register">急速借款</button>
           <!-- 使用协议 -->
           <div class="agreement">
             <i></i>
             <span>注册即代表同意 <span style="color:#fdff3a" @click="toAgreement">《信用白条用户使用协议》</span></span>
           </div>

        </div>

      </div>
       <tipModal :showTip.sync="showTip" :message="message" :downLoad="downLoad"></tipModal>
  </div>
</template>
<script>
import countDownBtn from "@/components/countDownBtn";
import tipModal from "@/components/tipModal";
import api from "../api/api.js";
import system from '../utils/system.js'
export default {
  name: "theme",
  data() {
    return {
      telephone: "",
      code: "",
      message: "",
      showTip: false,
      downLoad:false
    };
  },
  created () {
    localStorage.system = system()
  },
  methods: {
    getCode(val) {
      let flag = this._verifyPhone();
      console.log(val);
      if (flag) {
        //发短信
        this._sendMessage();
      }
    },
    _verifyPhone() {
      let telephone = this.telephone;
      let flag = true;
      if (telephone) {
        if (!/^1\d{10}$/gi.test(telephone)) {
          this.message = "手机号不合法";
          this.showTip = true;
          flag = false;
        }
      } else {
        this.message = "请输入手机号";
        this.showTip = true;
        flag = false;
      }
      return flag;
    },
    _sendMessage() {
      console.log("send message!");
      let paramObj = {
        phone: this.telephone,
        source_id: localStorage.source_id,
        source_tag: localStorage.source_tag,
        key: localStorage.reg_sms_key
      };
      api.isRegister(paramObj).then(res => {
        console.log(res);
        //验证码失效
        if (res.code == "-1") {
          this.message = res.message;
          this.showTip = true;
        }
        //成功
        if (res.code == "0") {
          this.$refs.countDownBtn.start = true;
        }
        //已注册过
        if (res.code == '1000') {
          this.message = res.message
          this.showTip = true
          this.downLoad = true
        }
      });
    },
    register() {
      let flag = this._verifyPhone();
      if (!flag) {
        return;
      }
      if (!this.code) {
        this.message = "请输入验证码";
        this.showTip = true;
        return;
      }
      if (!this.password) {
        this.message = "请输入登录密码";
        this.showTip = true;
        return;
      }
      if (this.password.length < 6 || this.password.length > 12) {
        this.message = "登录密码长度为6~12位";
        this.showTip = true;
        return;
      }
      //提交给后台
      this._commit();
    },
    _commit() {
      console.log(this.telephone);
    },
    toAgreement() {
      this.$router.push({ name: "agreement" });
    }
  },
  components: {
    countDownBtn,
    tipModal
  }
};
</script>

<style lang="less">
@import "./theme.less";
</style>
