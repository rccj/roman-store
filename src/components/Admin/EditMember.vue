<template>
  <div>
    <br />
    <div>
      <form @submit.prevent="updateMember">
        <div>
          <div>
            <input disabled type="text" v-model="id" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="auth" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="email" required />
          </div>
        </div>
        <div>
          <div>
            <input type="text" v-model="userName" required />
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link :to="{name:'view-member',params:{member_id:this.id}}">Cancel</router-link>
      </form>
    </div>
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
    updateMember() {
      db.collection("members")
        .where("id", "==", this.$route.params.member_id)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref
              .update({
                id: this.id,
                auth: this.auth,
                email: this.email,
                userName: this.userName,
                cart: this.cart
              })
              .then(() => {
                this.$router.push({
                  name: "view-member",
                  params: { member_id: this.id }
                });
              });
          });
        });
    }
  }
};
</script>