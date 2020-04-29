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
    //讓購物車為空？
    cart: [1],
    userEmail: '',
    order: [],
    shipping: 60,
    totalWithTax: '',
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
    //重新排列產品列表
    //低到高
    setProductsLowToHigh(state) {
      state.productList = state.productList.sort((a, b) => {
        return a.price - b.price
      })
    },

    //高到低
    setProductsHighToLow(state) {
      state.productList = state.productList.sort((a, b) => {
        return b.price - a.price
      })
    },

    setFilter(state, value) {

      if (value[0] == 'type') {
        state.productList = state.productList.filter(item => {
          return item.type === value[1]
        })
      } else if (value[0] == 'brand') {
        state.productList = state.productList.filter(item => {
          return item.brand === value[1]
        })
      }

    },
    //獲取普通購物車資料
    setCart(state, data) {
      if (firebase.auth().currentUser) {
        state.cart = data || []
        //讀取雲端會員的購物車
      } else (
        state.cart = JSON.parse(localStorage.getItem('cartData')) || []
      )

    },

    //添加項目至購物車
    addCart(state, data) {

      let findData = state.cart.some(item => {
        return item.title == data.title
      })

      if (findData) {
        state.cart.forEach((item, index) => {
          if (item.title == data.title) {


            item.amount = Number(item.amount) + Number(data.amount)

          }
        })
      }
      else {
        let deepCopy = JSON.parse(JSON.stringify(data));

        state.cart.push(deepCopy)
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
                  // console.log('增加項目至購物車')
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
                    // console.log('增加項目至購物車')
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
    //清空購物車
    clearCart(state) {
      state.cart = []

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
                  // console.log('清空購物車')
                });
            });
          });
      } else {
        localStorage.setItem('cartData', JSON.stringify(state.cart));

      }
    },
    //獲取使用者信箱
    getMail(state, data) {
      state.userEmail = data;
    },
    //提交訂單
    makeOrder(state, i) {
      // if (firebase.auth().currentUser) {
      db.collection("orders")
        .add({
          'total(with 10% tax)': `$${state.totalWithTax}`,
          customer: state.userEmail,
          cart: state.cart,
          information: i
        })
        .then(() => {
          // console.log('新增訂單')
        });
      // }
    }


  },
  getters: {
    getTotalPrice(state) {
      let total = state.cart.reduce((prev, item) => {
        return prev + item.price * item.amount
      }, 0)
      return total
    },
    getTax(state, getters) {
      let tax = (getters.getTotalPrice + state.shipping) / 10
      return tax
    },
    getTotalwithTax(state, getters) {
      state.totalWithTax = getters.getTotalPrice + getters.getTax
      return getters.getTotalPrice + getters.getTax
    },
    getFilterList(state) {
      let typeChildren = []
      let typeArr = []
      state.productList.forEach(item => {
        typeArr.push(item.type)
      })
      let NewTypeArr = [...(new Set(typeArr))]
      NewTypeArr.forEach(item => {
        typeChildren.push({
          value: item,
          label: item,
        })
      })
      let brandChildren = []
      let brandArr = []
      state.productList.forEach(item => {
        brandArr.push(item.brand)
      })
      let NewBrandArr = [...(new Set(brandArr))]
      NewBrandArr.forEach(item => {
        brandChildren.push({
          value: item,
          label: item,
        })
      })

      let getoptions = [
        {
          value: 'type',
          label: 'type',
          children: typeChildren
        },
        {
          value: 'brand',
          label: 'brand',
          children: brandChildren
        }
      ]
      return getoptions
    },
    cartLength(state){
      return state.cart.length
    }
  },

  actions: {
    //取得當前會員信箱
    getUserEmail({ commit }) {
      if (firebase.auth().currentUser) {
        commit('getMail', firebase.auth().currentUser.email)
      } else {
        return
      }

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
      return new Promise(resolve => {
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
            resolve();

          });
      })

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
          err => {
            alert("獲取資料失敗");
          };
        });
    },


  },



})

export default store;

