<template>
  <div class="container">
    <form @submit.prevent="register" class="box">
      <h1>Register</h1>
      <!-- 使用者 -->
      <div>username</div>
      <input
        id="username"
        type="text"
        placeholder="RomanChen"
        style="outline:none;"
        v-model="member.userName"
        @blur="userCheck"
      />
      <label v-if="!userVerify" style="color:red">{{userVerifyMsg}}</label>

      <!-- 信箱 -->
      <div>e-mail</div>
      <input
        id="email"
        type="email"
        placeholder="roman1234@gmail.com"
        style="outline:none;"
        v-model="member.email"
        @blur="emailCheck"
      />
      <label v-if="!emailVerify" style="color:red">{{emailVerifyMsg}}</label>

      <!-- 密碼 -->
      <div>password</div>
      <input
        id="password"
        type="password"
        placeholder="six or more characters"
        style="outline:none;"
        v-model="member.passWord"
        @blur="passCheck"
      />
      <label v-if="!passVerify" style="color:red">{{passVerifyMsg}}</label>

      <!-- 確認密碼 -->
      <div>confirm password</div>
      <input
        type="password"
        placeholder="text passwowd again"
        style="outline:none;"
        v-model="member.confirmPassword"
        @blur="confirmCheck"
      />
      <label v-if="!confirmVerify" style="color:red">{{confirmVerifyMsg}}</label>

      <br />
      <input type="submit" value="register" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../db";

import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      name: "Register",

      //輸入註冊會員
      member: {
        userName: "",
        email: "",
        passWord: "",
        confirmPassword: ""
      },
      //驗證資料
      userVerify: false,
      userVerifyMsg: "",
      emailVerify: false,
      emailVerifyMsg: "",
      passVerify: false,
      passVerifyMsg: "",
      confirmVerify: false,
      confirmVerifyMsg: ""
    };
  },
  computed: {
    ...mapState(["memberList"]) //fire
  },
  methods: {
    ...mapActions(["getFireMember"]),

    //驗證使用者
    userCheck() {
      //fire
      let memberCheck = this.memberList.some(item => {
        return item.userName == this.member.userName;
      });

      if (this.member.userName == "") {
        this.userVerifyMsg = "請輸入名稱";
        this.userVerify = false;
      } else if (memberCheck == true) {
        this.userVerifyMsg = "此名稱已被使用";
        this.userVerify = false;
      } else if (!/^[a-zA-Z0-9]{1,26}$/.test(this.member.userName)) {
        this.userVerifyMsg = "只能有英文大小寫及數字，且長度為1-26字元";
        this.userVerify = false;
      } else this.userVerify = true;
    },

    //原
    //驗證email
    emailCheck() {
      //fire
      let memberCheck = this.memberList.some(item => {
        return item.email == this.member.email;
      });

      if (this.member.email == "") {
        this.emailVerifyMsg = "請輸入信箱";
        this.emailVerify = false;
      } else if (memberCheck == true) {
        this.emailVerifyMsg = "此信箱已被使用";
        this.emailVerify = false;
      } else if (
        !/^(([.](?=[^.]|^))|[\w_%{|}#$~`+!?-])+@(?:[\w-]+\.)+[a-zA-Z.]{2,63}$/.test(
          this.member.email
        )
      ) {
        this.emailVerifyMsg = "此為非法信箱格式";
        this.emailVerify = false;
      } else this.emailVerify = true;
    },
    //原
    //驗證密碼
    passCheck() {
      if (this.member.passWord == "") {
        this.passVerifyMsg = "請輸入密碼";
        this.passVerify = false;
      } else if (!/^[a-zA-Z0-9]{6,16}$/.test(this.member.passWord)) {
        this.passVerifyMsg = "至少包含6-16大小寫英文數字";
        this.passVerify = false;
      } else this.passVerify = true;
    },
    //原
    //驗證確認密碼
    confirmCheck() {
      if (this.member.confirmPassword == "") {
        this.confirmVerifyMsg = "請確認密碼";
        this.confirmVerify = false;
      } else if (this.member.confirmPassword !== this.member.passWord) {
        this.confirmVerifyMsg = "請輸入一樣的密碼";
        this.confirmVerify = false;
      } else this.confirmVerify = true;
    },
    //原
    //註冊
    register() {
      //不能空白
      if (this.userVerify === false) return alert("請確認資料");
      else if (this.emailVerify === false) return alert("請確認資料");
      else if (this.passVerify === false) return alert("請確認資料");
      else if (this.confirmVerify === false) return alert("請確認資料");
      else {
        // console.log("註冊中");
        this.registerData();
        this.saveMember();
        //原
        this.member.userName = "";
        this.member.email = "";
        this.member.passWord = "";
        this.member.confirmPassword = "";
        // console.log("註冊成功");
      }
    },
    //fire
    registerData() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.member.email, this.member.passWord)
        .then(
          user => {
            alert(`Account created for ${user.user.email}`);

            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
    },
    //fire
    saveMember() {
      db
        .collection("members")
        .add({
          id: this.memberList.length,
          userName: this.member.userName,
          email: this.member.email,
          passWord: this.member.passWord,
          auth: "customer",
          cart: []
        })
        .then(docRef =>
          this.$router.push("/").catch(error => console.log(err))
        );
    }
  },
  created() {
    this.getFireMember(); //fire
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