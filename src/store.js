import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import db from "./components/db";
import firebase from 'firebase'



Vue.use(Vuex, axios);


const store = new Vuex.Store({
  state: {

    memberList: [],
    productList: [] ,
    cart:[],
    memberCart:[],

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
    // setCart(state){
    //   state.cart= JSON.parse(localStorage.getItem('cartData'))||[]
    // },
        setCart(state) {
      if(firebase.auth().currentUser){
        
        //讀取雲端會員的購物車
      }else(
        state.cart= JSON.parse(localStorage.getItem('cartData'))||[]
      )
      
    },
    //增加本地購物車
    // addCart(state,data){
    //   state.cart.push(data)
    //   localStorage.setItem('cartData',JSON.stringify(state.cart));
    // },
    addCart(state,data){
      if(firebase.auth().currentUser){
        state.cart.push(data)
        //推上雲端會員購物車
      }else{
        state.cart.push(data)
        localStorage.setItem('cartData',JSON.stringify(state.cart));
      }
    },

    //刪除購物車
    // deleteItem(state,index){
    //   state.cart.splice(index,1);
    //   localStorage.setItem('cartData', JSON.stringify(state.cart));
    // },
    deleteItem(state,index){
      if(firebase.auth().currentUser){
        state.cart.splice(index,1);
        //存回雲端
      }else{
        state.cart.splice(index,1);
        localStorage.setItem('cartData', JSON.stringify(state.cart));
      }
    }
  },

  actions: {
   
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
              cart:doc.data().data,
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
        .get()
        .then(querySnapshot => {
          let arr = []
          querySnapshot.forEach(doc => {
            // console.log(doc.data());
            const data = {
              id: doc.data().id,
              title: doc.data().title,
              type: doc.data().title,
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


  },



})

export default store;

