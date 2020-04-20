<template>
  <div class="container">
    <el-container style=" max-width: 500px">
      <el-header>{{userName}}</el-header>
      <el-main class="box">
        <div>ID#：{{id}}</div>
        <div>auth：{{auth}}</div>
        <div>email：{{email}}</div>
        <div>Cart：{{cart.title}}</div>

        <div>
          <router-link to="/admin/members">
            <el-button type="primary" size="small" icon="el-icon-arrow-left"></el-button>
          </router-link>
          <router-link :to="{name:'edit-member',params:{member_id:this.id}}">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </router-link>
          <el-button type="danger" @click="deleteMember" icon="el-icon-delete" circle></el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import firebase from "firebase";
import db from "../db";

export default {
  name: "view-member",
  data() {
    return {
      id: null,
      auth: null,
      email: null,
      userName: null,
      cart: []
    };
  },
  beforeRouteEnter(to, from, next) {
    db
      .collection("members")
      .where("id", "==", to.params.member_id)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          next(vm => {
            vm.id = doc.data().id;
            vm.auth = doc.data().auth;
            vm.email = doc.data().email;
            vm.userName = doc.data().userName;
            vm.cart = doc.data().cart;
          });
        });
      });
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      db
        .collection("members")
        .where("id", "==", this.$route.params.member_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.id = doc.data().id;
            this.auth = doc.data().auth;
            this.email = doc.data().email;
            this.userName = doc.data().userName;
            this.cart = doc.data().cart;
          });
        });
    },
    deleteMember() {
      if (confirm("Are you sure?")) {
        db
          .collection("members")
          .where("id", "==", this.$route.params.member_id)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push("/admin/members");
            });
          });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.box {
  display: flex;
  flex-direction: column;
}
</style>