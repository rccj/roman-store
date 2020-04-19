import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import db from "./components/db";


Vue.use(Vuex, axios);


const store = new Vuex.Store({
  state: {

    memberList: [],
    productList: [] ,
    publiCart:[],
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

    //購物車
    setCart(state,data){
      state.setCart = data
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

