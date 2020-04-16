import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'

Vue.use(Vuex, axios);

const PRODUCT_URL = "https://sleepy-woodland-36566.herokuapp.com/products"
const CART_URL = "https://sleepy-woodland-36566.herokuapp.com/cart"
const MEMBER_URL = "https://sleepy-woodland-36566.herokuapp.com/members"

const store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
    memberData:[],
    logIn:{
      id:'',
      cart:[],
      authority:'',
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProductsHighToLow(state) {
      state.products = state.products.sort(function (a, b) {
        return a.price - b.price
      })
    },
    setProductsLowToHigh(state) {
      state.products = state.products.sort(function (a, b) {
        return b.price - a.price
      })
    },

    //初始化/更新購物車
    setCart(state, cart) {
      state.cart = cart;
    },
    //增加
    addCart(state, item) {
      state.cart.push(item);
      console.log(state.cart.length)
    },
    //清空
    clearCart(state) {
      state.cart = [];
    },
    setMemberData(state,data){
      state.memberData = data
    }

  },

  actions: {
    //取得產品資料
    axiosProducts({ commit }) {
      axios.get(PRODUCT_URL)
        .then(rs => {
          commit('setProducts', rs.data)
        })
    },

    //取得購物車資料
    axiosCart({ commit }) {
      axios.get(CART_URL)
        .then(res => {
          commit('setCart', res.data)
        })
    },
    //增加產品至購物車
    axiosAddCart({ commit }, item) {
      axios.post(CART_URL, item)
        .then((res => {
          commit('addCart', res)
        }))
    },
    //清空購物車
    axiosClearCart({ commit, state }) {
      // console.log(state.cart.length)
      // axios.all()
      for (let i = 0; i < state.cart.length; i++) {
        axios.delete(`${CART_URL}/${state.cart[i].id}`)
        // .then((res => {
        //   // console.log(res.data)
        // }))
      }
      commit('clearCart')
    },
    //取得搜尋後的產品列表
    axiosSearchProducts({ commit }, keyWord) {
      axios.get(`${PRODUCT_URL}?q=${keyWord}`)
        .then(res => {
          commit('setProducts', res.data)
        })
    },
    //註冊帳號
    axiosResgiter(context, member) {
      axios.post(MEMBER_URL, member)
        .then(res => {
          console.log('成功註冊此會員' + res)
        })
    },
    //獲取會員資料
    axiosGetMemberData({commit}) {
      axios.get(MEMBER_URL)
      .then(res=>{
         commit("setMemberData", res.data) 
      })
    }
  },


})

export default store;




// Promise.all(state.cart.map(({ id }) => {
//   axios.delete(`${CART_URL}/${id}`);
// }));


// axios.all(state.cart.map(({ id }) => {
//   axios.delete(`${CART_URL}/${id}`);

// }))