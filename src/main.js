import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import ListPage from './pages/listPage.vue'
import DetailPage from './pages/detailPage.vue'
import UpdatePage from './pages/updatePage.vue'
import CreatePage from './pages/createPage.vue'
import mapboxgl from 'mapbox-gl'
import {
  FIREBASE_API_KEY,
  MAPBOX_API_TOKEN,
} from './consts/consts.js'

// Initialize Firebase
var config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "sample-customer-management.firebaseapp.com",
  databaseURL: "https://sample-customer-management.firebaseio.com",
  projectId: "sample-customer-management",
  storageBucket: "sample-customer-management.appspot.com",
  messagingSenderId: "699973683004"
};

firebase.initializeApp(config);
Vue.use(VueRouter)
Vue.use(Vuetify, {
  theme: {
    primary: "#4DB6AC",
    secondary: "#80CBC4",
    accent: "#E57373",
    error: "#f44336",
    warning: "#ffeb3b",
    info: "#2196f3",
    success: "#4caf50"
  }
})

const router = new VueRouter({
  routes: [
    { path: '/', name: 'list', component: ListPage },
    { path: '/detail/', name: 'detail', component: DetailPage, props: true },
    { path: '/update/', name: 'update', component: UpdatePage, props: true },
    { path: '/create/', name: 'create', component: CreatePage, props: true },
  ]
})

new Vue({
  el: '#app',
  template:'<app></app>',
  components: { App },
  router
})

mapboxgl.accessToken = MAPBOX_API_TOKEN
