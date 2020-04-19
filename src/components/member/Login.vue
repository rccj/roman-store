<template>
  <div class="container">
    <form @submit="logInFire()" class="box">
      <h1>Login</h1>
      <div>email</div>
      <input id="email" type="email" style="outline:none;" v-model="member.email" />
      <div>password</div>
      <input id="password" type="password" style="outline:none;" v-model="member.passWord" />
      <br />
      <input type="submit" value="sign in" />
    </form>
  </div>
</template>

<script>
import firebase from "firebase"; //fire
import db from "../db"; //fire

import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "Login",

  data() {
    return {
      member: {
        email: "",
        passWord: ""
      }
    };
  },
  computed: {

  },
  methods: {


    //fire
    logInFire() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.member.email, this.member.passWord)
        .then(
          user => {
            alert(`You are logged in as ${user.user.email}`);
            this.$router.go({ path: this.$router.path });

          },
          err => {
            alert(err.message);
          }
        );
    },
  },

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