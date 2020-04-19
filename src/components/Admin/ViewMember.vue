<template>
  <div>
    <ul>
      <li>
        <h4>{{userName}}</h4>
      </li>
      <li>ID#：{{id}}</li>
      <li>auth：{{auth}}</li>
      <li>email：{{email}}</li>
      <li>Cart：{{cart}}</li>
    </ul>
    <router-link to="/admin/members">Back</router-link>
    <button @click="deleteMember" class="btn red">Delete</button>
    <div>
      <router-link :to="{name:'edit-member',params:{member_id:this.id}}">Edit</router-link>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from "../db";

export default {
  name: "view-member",
  data() {
    return {
      id: null,
      auth: null,
      email: null,
      userName: null,
      cart:[]
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
      db.collection("members")
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
        db.collection("members")
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