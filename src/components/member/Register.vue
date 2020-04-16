<template>
  <div class="container">
    <div class="box">
      <h1>Register</h1>
      <!-- 使用者 -->
      <div>username</div>
      <input
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
      <input type="button" value="register" @click="register" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      //輸入註冊會員
      member: {
        userName: "",
        email: "",
        passWord: "",
        confirmPassword: "",
        authority: "customer"
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
    ...mapState(["memberData"])
  },
  methods: {
    ...mapActions(["axiosResgiter", "axiosGetMemberData"]),

    //驗證使用者
    userCheck() {
      let memberCheck = this.memberData.some(item => {
        return item.userName == this.member.userName;
      });
      if (this.member.userName == "") {
        this.userVerifyMsg = "請輸入名稱";
        this.userVerify = false;
      } else if (memberCheck == true) {
        this.userVerifyMsg = "此帳號已被使用";
        this.userVerify = false;
      } else if (!/^[a-zA-Z0-9]{1,26}$/.test(this.member.userName)) {
        this.userVerifyMsg = "只能有英文大小寫及數字，且長度為1-26字元";
        this.userVerify = false;
      } else this.userVerify = true;
    },
    //驗證email
    emailCheck() {
      let memberCheck = this.memberData.some(item => {
        return item.email == this.member.email;
      });
      if (this.member.email == "") {
        this.emailVerifyMsg = "請輸入名稱";
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

    //註冊
    register() {
      //不能空白
      if (!this.userVerify) return alert("請填完整資料");
      if (!this.emailVerify) return alert("請填完整資料");
      if (!this.passVerify) return alert("請填完整資料");
      if (!this.confirmVerify) return alert("請填完整資料");

      //核對資料沒有重複

      let member = this.member;

      console.log("註冊中");

      this.axiosResgiter(member).then(() => {
        member.userName = "";
        member.email = "";
        member.passWord = "";
        member.confirmPassword = "";
        console.log("註冊成功");
      });


    }
  },
  created() {
    this.axiosGetMemberData();
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