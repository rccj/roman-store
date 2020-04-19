<template>
  <div>
    <div class="container">
      <h1>新增會員</h1>
      <form @submit.prevent="registerData" class="list">
        <div>
          <input type="text" v-model="member_id" required />
          <label>ID#</label>
        </div>
        <div>
          <input type="text" v-model="auth" required />
          <label>auth</label>
        </div>
        <div>
          <input type="text" v-model="userName" required />
          <label>userName</label>
        </div>
        <div>
          <input type="email" v-model="email" required />
          <label>email</label>
        </div>
        <div>
          <input type="password" v-model="passWord" required />
          <label>password</label>
        </div>
        <button type="submit">新增</button>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../db";

import { mapActions, mapState } from "vuex";
export default {
  name: "new-member",
  data() {
    return {
      member_id: null,
      auth: null,
      email: null,
      userName: null,
      passWord: null
    };
  },
  methods: {
    registerData() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.passWord)
        .then(
          user => {
            alert(`Account created for ${user.user.email}`);
            this.saveMember();
            // this.$router.push("/login");
            // this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
    },

    saveMember() {
      db
        .collection("members")
        .add({
          id: this.member_id,
          auth: this.auth,
          email: this.email,
          userName: this.userName,
          passWord: this.passWord,
          cart:[],
        })
        .then(docRef =>
          this.$router.push("/admin/members").catch(error => console.log(err))
        );
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list {
  width: 500px;
  display: flex;
}
.cover {
  width: 100px;
  height: 100px;
  background: center center;
  background-size: cover;
  width: 100%;
  height: 350px;
}
</style>
