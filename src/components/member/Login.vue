<template>
  <div class="container">
    <div class="box">
      <h1>Login</h1>
      <div>username</div>
      <input type="text" style="outline:none;" v-model="member.userName" />
      <div>password</div>
      <input type="password" style="outline:none;" v-model="member.passWord" />
      <br />
      <input type="submit" value="sign in" @click="signIn()" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      member: {
        userName: "",
        passWord: ""
      }
    };
  },
  computed: {
    ...mapState(["memberData"])
  },
  methods: {
    ...mapActions(["axiosGetMemberData"]),

    signIn() {
      let memberCheck = this.memberData.filter(item => {
        return (
          item.userName == this.member.userName &&
          item.passWord == this.member.passWord
        );
      });
      if (memberCheck.length == 1) {
        this.member.userName = "";
        this.member.passWord = "";
        console.log("登入成功");
      } else {
        alert("登入失敗");
      }
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
  height: 400px;
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