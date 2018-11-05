import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import App from './App.vue'
import ListPage from './pages/ListPage.vue'
import DetailPage from './pages/DetailPage.vue'
import EditPage from './pages/EditPage.vue'

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
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'list', component: ListPage },
    { path: '/detail/', name: 'detail', component: DetailPage, props: true },
    { path: '/edit/', name: 'edit', component: EditPage, props: true },
  ]
})

new Vue({
  el: '#app',
  template:'<app></app>',
  components: { App },
  router
})
