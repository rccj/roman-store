import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const PRODUCT_URL = "https://sleepy-woodland-36566.herokuapp.com/products"

const store = new Vuex.Store({
  state: {
    products: [],
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
    }
  },
  actions: {
    fetchProducts({ commit }) {
      fetch(PRODUCT_URL)
        .then(rs => rs.json())
        .then(rs => {
          commit('setProducts', rs)
        })
    }
  }
})

export default store;