// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import firebase from "firebase"
import "./components/db"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faGoogle,faYoutube ,faInstagramSquare,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add( faGoogle,faYoutube,faInstagramSquare,faFacebook,faTwitter);
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(ElementUI);

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      el: '#app',
      router,
      store,
      components: { App },
      template: '<App/>'
    })

  }
})


/* eslint-disable no-new */