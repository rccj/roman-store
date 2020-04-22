import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import db from "./components/db";
import firebase from 'firebase'



Vue.use(Vuex, axios);


const store = new Vuex.Store({
  state: {
    memberList: [],
    productList: [],
    cart: [],
    userEmail: '',
    order: [],
  },
  mutations: {

    //會員資料
    setMemberList(state, data) {
      state.memberList = data
    },

    //產品列表
    setProductList(state, data) {
      state.productList = data
    },

    //獲取普通購物車資料
    setCart(state, data) {
      if (firebase.auth().currentUser) {
        state.cart = data

        //讀取雲端會員的購物車
      } else (
        state.cart = JSON.parse(localStorage.getItem('cartData')) || []
      )

    },


    addCart(state, data) {

      let findData = state.cart.find(item => {
        return item.id == data.id
      })
      // if (findData !== undefined) {
      //   console.log('有買過')
      // } else {
      //   console.log('沒買過')
      // }
      if (findData !== undefined) {
        state.cart.forEach(item => {
          if (item.id == data.id) {
            item.amount = Number(item.amount) + Number(data.amount)
          }
        })
      }
      else {
        state.cart.push(data)
      }
      if (firebase.auth().currentUser) {
        db.collection("members")
          .where("email", "==", state.userEmail)
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref
                .update({
                  cart: state.cart
                })
                .then(() => {
                  console.log('增加項目至購物車')
                });
            });
          });
        //推上雲端會員購物車
      }
      else {
        // state.cart.push(data)
        localStorage.setItem('cartData', JSON.stringify(state.cart));
      }
    },

    //刪除購物車
    deleteItem(state, index) {
      if (firebase.auth().currentUser) {
        if (confirm("Are you sure?")) {
          state.cart.splice(index, 1);

          db.collection("members")
            .where("email", "==", state.userEmail)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                doc.ref
                  .update({
                    cart: state.cart
                  })
                  .then(() => {
                    console.log('增加項目至購物車')
                  });
              });
            });
        }
        //存回雲端
      } else {
        state.cart.splice(index, 1);
        localStorage.setItem('cartData', JSON.stringify(state.cart));
      }
    },
    getMail(state, data) {
      state.userEmail = data
    },

  },
  getters:{
    getTotalPrice(state) {
      let total = state.cart.reduce((prev, item) => {
        return prev + item.price * item.amount
      }, 0)
      return total
    }
  },

  actions: {
    //取得當前會員信箱
    getUserEmail({ commit }) {
      commit('getMail', firebase.auth().currentUser.email)
    },
    //取得firestore會員資料
    getFireMember({ commit }) {
      db.collection("members")
        .orderBy('id')
        .get()
        .then(querySnapshot => {
          let arr = []
          querySnapshot.forEach(doc => {
            // console.log(doc.data());
            const data = {
              id: doc.data().id,
              auth: doc.data().auth,
              email: doc.data().email,
              userName: doc.data().userName,
              cart: doc.data().data,
            };
            arr.push(data)
          });
          commit("setMemberList", arr)

        });

    },
    //fire
    //取得firestore產品資料
    getFireProducts({ commit }) {
      db.collection("products")
        .orderBy('id')
        .get()
        .then(querySnapshot => {
          let arr = []
          querySnapshot.forEach(doc => {
            // console.log(doc.data());
            const data = {
              id: doc.data().id,
              date: doc.data().date,
              stock: doc.data().stock,
              amount: doc.data().amount,
              title: doc.data().title,
              type: doc.data().type,
              brand: doc.data().brand,
              price: doc.data().price,
              description: doc.data().description,
              imageURL: doc.data().imageURL

            };
            arr.push(data)
          });
          commit("setProductList", arr)

        });
    },
    //取得firestore會員購物車
    getMemberCart({ commit }, userEmail) {
      db.collection("members")
        .where("email", "==", userEmail)
        .get()
        .then(querySnapshot => {

          querySnapshot.forEach(doc => {
            // commit('getCart', doc.data().cart)
            // console.log(doc.data().cart)
            commit('setCart', doc.data().cart)
          });
        });
    },


  },



})

export default store;

