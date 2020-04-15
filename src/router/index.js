import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components//main/Home'
import contact from '@/components/contact/contact'
import services from '@/components/contact/services'
import privacy from '@/components/contact/privacy'
import location from '@/components/contact/location'
import terms from '@/components/contact/terms'
import shop from '@/components/shop/shop'
import Login from '@/components/member/login'
import Register from '@/components/member/register'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      children: [
        {
          path: 'services',
          component: services,
        }, {
          path: 'location',
          component: location,
        }, {
          path: 'terms',
          component: terms,
        }, {
          path: 'privacy',
          component: privacy,
        },
      ]
    },
    {
      path: '/shop/:id?',
      name: 'shop',
      component: shop,
      // children: [
      //   {
      //     path: 'search/:id?',
      //     component: shop,
      //   },
      // ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
