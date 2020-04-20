import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components//main/Home'
import contact from '@/components/contact/contact'
import services from '@/components/contact/services'
import privacy from '@/components/contact/privacy'
import location from '@/components/contact/location'
import terms from '@/components/contact/terms'
import shop from '@/components/shop/shop'
import ProductDetail from '@/components/shop/ProductDetail'
import Login from '@/components/member/login'
import Register from '@/components/member/register'
import Cart from '@/components/member/Cart'


//管理層
import Admin from '@/components/Admin/Admin'
import AdminMembers from '@/components/Admin/AdminMembers'
import AdminProducts from '@/components/Admin/AdminProducts'
import NewMember from '@/components/Admin/NewMember'
import EditMember from '@/components/Admin/EditMember'
import ViewMember from '@/components/Admin/ViewMember'
import NewProduct from '@/components/Admin/NewProduct'
import EditProduct from '@/components/Admin/EditProduct'
import ViewProduct from '@/components/Admin/ViewProduct'

import firebase from 'firebase'
import db from '../components/db'



Vue.use(Router)

let router = new Router({
  routes: [
    //首頁
    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    //管理者權限
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: {
        requiresAdmin: true
      },
      children: [
        {
          path: 'members',
          component: AdminMembers,
        },
        {
          path: 'products',
          component: AdminProducts,

        },

      ]
    },
    //管理員產品
    {
      path: '/new-product',
      name: 'new-product',
      component: NewProduct,
      meta: {
        requiresAdmin: true
      },
    },

    {
      path: '/admin/products/edit/:product_id',
      name: 'edit-product',
      component: EditProduct,
      meta: {
        requiresAdmin: true
      },
    },
    {
      path: '/admin/products/:product_id',
      name: 'view-product',
      component: ViewProduct,
      meta: {
        requiresAdmin: true
      },
    },


    //管理員會員
    {
      path: '/new-member',
      name: 'new-member',
      component: NewMember,
      meta: {
        requiresAdmin: true
      },
    },
    {
      path: '/admin/members/edit/:member_id',
      name: 'edit-member',
      component: EditMember,
      meta: {
        requiresAdmin: true
      },
    },
    {
      path: '/admin/members/:member_id',
      name: 'view-member',
      component: ViewMember,
      meta: {
        requiresAdmin: true
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },



    //聯絡資訊
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      children: [
        {
          path: 'services',
          component: services,
        },
        {
          path: 'location',
          component: location,
        },
        {
          path: 'terms',
          component: terms,
        },
        {
          path: 'privacy',
          component: privacy,
        },
      ]
    },
    {
      path: '/shop/:id?',
      name: 'shop',
      component: shop,
    },
    {
      path: '/product-detail/:product_id',
      name: 'product-detail',
      component: ProductDetail,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuess: true
      },
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requiresGuess: true
      },
    },
  ]
});





firebase.auth().currentUser


//Nav Guards
router.beforeEach((to, from, next) => {//進到這個頁面之前 
  //Check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAdmin)) {//歷便requiresAdmin的router
    //如果是requiresAdmin的頁面，作下列判斷
    //Check if NOT logged in
    let email = firebase.auth().currentUser.email
    let admin = 'stubstub8257@gmail.com'

    if (!firebase.auth().currentUser) { //如果沒登入就跳到登入頁面
      //Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else if(firebase.auth().currentUser && email == admin){
      next();
    }
    // else { //如果有登入就到達新頁面
    //   //Proceed to route
    //   next();
    // }
  }
  else if (to.matched.some(record => record.meta.requiresMember)) {
    //Check if logged in
    if (!firebase.auth().currentUser ) {
      //Go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      //Proceed to route
      next();
    }
  }
  else if (to.matched.some(record => record.meta.requiresGuess)) {
    //Check if logged in
    if (firebase.auth().currentUser) {
      //Go to login
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      //Proceed to route
      next();
    }
  }
  else {
    //Proceed to route
    next();
  }
})


export default router 
