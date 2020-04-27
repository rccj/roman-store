<template>
  <div class="wrap">
    <div class="wrap_top">
      <div class="wrap_top_box">
        <router-link v-if="currentUser == 'stubstub8257@gmail.com'" :to="{name: 'admin'}">· Admin</router-link>
        <router-link v-if="!isLoggedIn" :to="{name: 'login'}">· LOGIN</router-link>
        <router-link v-if="!isLoggedIn" :to="{name: 'register'}">· REGISTER</router-link>
        <div v-if="isLoggedIn">· {{currentUser}} ·</div>
        <!-- <button v-if="isLoggedIn" @click="logout">Logout</button> -->
        <el-button v-if="isLoggedIn" @click="logout" type="text" size="mini">
          <div style="font-size:0.7em">Log out</div>
        </el-button>
        <button @click="testMemberCart">按我</button>
      </div>
    </div>
    <div class="wrap_bottom">
      <div class="wrap_bottom_box">
        <div class="wrap_bottom_box_first">
          <router-link to="/" class="logo">Roman.</router-link>
          <!-- <div>
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
            >{{tag}}</el-tag>
            <el-input
              size="mini"
              placeholder="Search"
              v-model="inputValue"
              @keyup.enter.native="handleInputConfirm"
            >
              <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
          </div>-->
        </div>

        <div class="wrap_bottom_box_second">
          <router-link :to="{name: 'shop'}">SHOP</router-link>
          <router-link :to="{name: 'contact'}">CONTACT</router-link>

          <el-popover placement="bottom-end" max-width="200" trigger="hover">
            <el-table :data="cart" emptyText="-empty-">
              <el-table-column width="120" property="title" label="title"></el-table-column>
              <el-table-column width="50" property="amount"></el-table-column>
              <el-table-column width="70" label="price">
                <template slot-scope="scope">{{scope.row.price *scope.row.amount}}</template>
              </el-table-column>
            </el-table>
            <el-button style="padding:0 ; width:40px" slot="reference" type="text">
              <router-link :to="{name: 'cart'}">
                <span v-if="cart.length == 0">
                  <i class="el-icon-shopping-cart-2"></i>
                </span>
                <span v-else>
                  <i class="el-icon-shopping-cart-full"></i>
                </span>
                <span v-if="cart.length !== 0">({{cart.length}})</span>
              </router-link>
            </el-button>
            <div class="total">total: {{getTotalPrice}}</div>
            <i></i>
            <el-button type="text" @click="clearCart" plain class="el-icon-delete" size="mini">clear</el-button>
            <el-button type="text" plain class="el-icon-delete" size="mini">
              <router-link :to="{name:'checkout'}">check out</router-link>
            </el-button>
          </el-popover>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";

import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Nav",
  data() {
    return {
      isLoggedIn: false,
      currentUser: false,
      inputValue: "",
      dynamicTags: [],
      inputVisible: false
    };
  },
  computed: {
    ...mapState(["cart", "memberCart", "userEmail"]),
    ...mapGetters(["getTotalPrice"]),
    isAdminLogged() {
      if (currentUser == "stubstub8257@gmail.com") {
        return ture;
      } else false;
    }
  },
  methods: {
    ...mapMutations(["setCart", "clearCart"]),
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
      admin
        .auth()
        .createUser({
          email: "user@example.com",
          emailVerified: false,
          phoneNumber: "+11234567890",
          password: "secretPassword",
          displayName: "John Doe",
          photoURL: "http://www.example.com/12345678/photo.png",
          disabled: false
        })
        .then(function(userRecord) {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully created new user:", userRecord.uid);
        })
        .catch(function(error) {
          console.log("Error creating new user:", error);
        });
    },

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    handleInputConfirm() {
      if (this.inputValue) {
        this.dynamicTags = [];
        this.dynamicTags.push(this.inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
    this.setCart();
    this.getFireProducts();
    this.getUserEmail();
    this.getMemberCart(this.userEmail);
    console.log(firebase.auth().currentUser)
  },
  mounted() {
    // console.log(this.cart);
  }
};
</script>
<style scoped lang="scss">
.wrap {
  max-width: 100%;
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
      &_first {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        max-width: 600px;
        .logo {
          font-size: 5em;
          font-weight: bold;
        }

        // & > :last-child {
        //   display: flex;
        //   justify-content: flex-end;
        //   // align-items: flex-start;
        //   flex-direction: column;
        //   margin-left: 20px;
        //   height: 60px;

        //   position: relative;
        // }
      }
      &_second {
        display: flex;
        flex-wrap: wrap;

        & > * {
          margin-left: 20px;
        }
      }
    }
  }
}
.total {
  text-align: end;
  margin: 0 20px;
}
</style>