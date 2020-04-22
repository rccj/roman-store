<template>
  <div class="container">
    <el-container style=" max-width: 500px">
      <el-header>{{userName}}</el-header>
      <el-main class="box">
        <div class="list">
          <el-avatar :size="80" :src="circleUrl"></el-avatar>
          <div>
            <div class="item">ID#：{{id}}</div>
            <div class="item">auth：{{auth}}</div>
            <div class="item">email：{{email}}</div>
            <div class="item">Cart：{{cart.title}}</div>
          </div>
        </div>
        <div class="icons">
          <router-link :to="{name: 'members'}">
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
      cart: [],
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
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
  .el-header {
    font-size: 3em;
    font-weight: bold;
    text-align: center;
  }
  .box {
    display: flex;
    flex-direction: column;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      .item {
        font-size: 1.5em;
      }
    }
    .icons {
      display: flex;
      justify-content: center;

      & > * {
        margin: 0 5px;
      }
    }
  }
}
</style>