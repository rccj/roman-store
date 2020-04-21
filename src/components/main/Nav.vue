<template>
  <div class="wrap">
    <div class="wrap_top">
      <div class="wrap_top_box">
        <router-link v-if="currentUser == 'stubstub8257@gmail.com'" to="/admin">· Admin</router-link>
        <router-link v-if="!isLoggedIn" to="/login">· LOGIN</router-link>
        <router-link v-if="!isLoggedIn" to="/register">· REGISTER</router-link>
        <button @click="testMemberCart">按我</button>
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
          />
          <button @click="resetProducts()">reset</button>
          <div class="search"></div>-->
        </div>
        <div v-if="isLoggedIn">{{currentUser}}</div>
        <div v-if="isLoggedIn">
          <button @click="logout">Logout</button>
        </div>
        <div class="wrap_bottom_box_second">
          <router-link to="/shop">SHOP</router-link>
          <router-link to="/contact">CONTACT</router-link>

          <el-popover placement="bottom-end" max-width="200" trigger="hover">
            <el-table :data="cart">
              <el-table-column width="120" property="title" label="title"></el-table-column>
              
              <el-table-column width="50" property="amount" ></el-table-column>
              <el-table-column width="70" label="price"><template slot-scope="scope">{{scope.row.price *scope.row.amount}}</template></el-table-column>
            </el-table>
            <el-button slot="reference" type="text">
              <router-link to="/cart">
                <span v-if="cart.length == 0">
                  <i class="el-icon-shopping-cart-2"></i>
                </span>
                <span v-else>
                  <!-- <span> -->
                  <i class="el-icon-shopping-cart-full"></i>
                </span>
                <span v-if="cart.length !== 0">({{cart.length}})</span>
              </router-link>
            </el-button>
          </el-popover>
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
      currentUser: false,
      inputValue: ""
    };
  },
  computed: {
    ...mapState(["cart", "memberCart", "userEmail"]),
    isAdminLogged() {
      if (currentUser == "stubstub8257@gmail.com") {
        return ture;
      } else false;
    }
  },
  methods: {
    ...mapMutations(["setCart"]),
    ...mapActions(["getMemberCart", "getFireProducts", "getUserEmail"]),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    },
    testMemberCart() {
      console.log(this.cart);
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
    this.getFireProducts();
    this.getUserEmail();
    this.getMemberCart(this.userEmail);
  },
  mounted() {
    // console.log(this.cart);
    // this.setCart();
  }
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