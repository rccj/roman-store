<template>
  <div class="wrap">
    <div class="wrap_top">
      <div class="wrap_top_box">
        <router-link v-if="isLoggedIn" to="/admin">· Admin</router-link>
        <router-link v-if="!isLoggedIn" to="/login">· LOGIN</router-link>
        <router-link v-if="!isLoggedIn" to="/register">· REGISTER</router-link>
      </div>
    </div>
    <div class="wrap_bottom">
      <div class="wrap_bottom_box">
        <div class="wrap_bottom_box_first">
          <router-link to="/" class="logo">Roman.</router-link>
          <!-- <input
            type="search"
            v-model="inputValue"
            style="outline:none;"
            @keyup.enter="search(inputValue)"
          />-->
          <!-- <button @click="resetProducts()">reset</button>
          <div class="search"></div>-->
        </div>
        <div v-if="isLoggedIn">{{currentUser}}</div>
        <div v-if="isLoggedIn">
          <button @click="logout">Logout</button>
        </div>
        <div class="wrap_bottom_box_second">
          <router-link to="/shop">SHOP</router-link>
          <router-link to="/contact">CONTACT</router-link>
          <router-link to="/cart">
            CART({{cart.length}})
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

import { mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false
    };
  },
  computed: {
    ...mapState(["cart"]),
    isAdminLogged(){
      if(currentUser == 'stubstub8257@gmail.com'){
        return ture
      }else false
    }
  },
  methods: {
    ...mapMutations(['setCart']),

    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
    this.setCart()
  
  },
  
};
</script>
<style scoped lang="scss">
.logo {
  font-size: 5em;
  font-weight: bold;
}
.wrap {
  &_top {
    height: 30px;
    background-color: #eee;
    width: 100%;
    display: flex;
    justify-content: center;

    &_box {
      margin: 0 20px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      max-width: 1400px;
      width: 100%;

      & > * {
        font-size: 0.7em;
        font-weight: bold;
        color: #444;
      }
    }
  }
  &_bottom {
    height: 80px;
    background-color: white;
    border-bottom: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: center;

    &_box {
      margin: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1400px;
      width: 100%;

      &_second > * {
        margin-left: 20px;
      }
    }
  }
}
</style>