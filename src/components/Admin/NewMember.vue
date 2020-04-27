<template>
  <div class="container">
    <el-container max-width="500px">
      <el-header>NEW MEMBER</el-header>
      <el-form label-position="left" label-width="80px" @submit.prevent="registerData">
        <el-form-item label="ID#">
          <el-input type="text" v-model="member_id" required></el-input>
        </el-form-item>
        <el-form-item label="auth">
          <el-input type="text" v-model="auth" required></el-input>
        </el-form-item>
        <el-form-item label="userName">
          <el-input type="text" v-model="userName" required></el-input>
        </el-form-item>
        <el-form-item label="email">
          <el-input type="text" v-model="email" required></el-input>
        </el-form-item>
        <el-form-item label="passWord">
          <el-input type="text" v-model="passWord" required></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="submit" @click="registerData">Register</el-button>
          <router-link :to="{name: 'members'}">
            <el-button>Cencel</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-container>

    <div class="container">
      <h1>新增會員</h1>
      <form @submit.prevent="registerData">
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
            // this.$router.push("/login");
            // this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      this.saveMember();
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
          cart: []
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
