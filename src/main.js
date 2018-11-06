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
