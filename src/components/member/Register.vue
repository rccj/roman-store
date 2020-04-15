<template>
  <div class="container">
    <div class="box">
      <h1>Register</h1>
      <div>username</div>
      <input type="text" placeholder="RomanChen" style="outline:none;" v-model="member.userName" />
      <div>e-mail</div>
      <input
        type="email"
        placeholder="roman1234@gmail.com"
        style="outline:none;"
        v-model="member.email"
      />
      <div>password</div>
      <input
        type="password"
        placeholder="six or more characters"
        style="outline:none;"
        v-model="member.passWord"
      />
      <div>confirm password</div>
      <input
        type="password"
        placeholder="text passwowd again"
        style="outline:none;"
        v-model="member.confirmPassword"
      />
      <br />
      <input type="button" value="register" @click="submit" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      member: {
        userName: "",
        email: "",
        passWord: "",
        confirmPassword: "",
        authority: "customer"
      }
    };
  },
  methods: {
    ...mapActions(["axiosResgiter"]),
    submit() {
      let member = this.member;
      if (member.passWord !== member.confirmPassword) {
        alert("請確認密碼都一樣");
        return;
      }
      console.log("註冊中");

      this.axiosResgiter(member).then(() => {
        member.userName = "";
        member.email = "";
        member.passWord = "";
        member.confirmPassword = "";
        console.log("註冊成功");
      });
    }
  }
};
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  .box {
    width: 400px;
    display: flex;
    flex-direction: column;
    & > h1 {
      text-align: center;
    }
    & > * {
      margin-bottom: 5px;
    }
  }
}
</style>