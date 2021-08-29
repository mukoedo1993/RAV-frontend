import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import User from './assets/components/User.vue' //register our main.js file.
import Blog from './assets/components/Blog.vue'
import Account from './assets/components/Account.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/blog' /*path is part of your domain*/,
   component: Blog
  }, // registered Blog component for this certain route.

  {path: '/account' , component: Account},
  {path: '', component: User}
]

const router = new VueRouter({
  routes: routes, //the rhs routes is the const varibale routes above.
  mode: 'history' //so, we do not need hashtag to disambiguate between folder's name and router's name anymore.
})

Vue.component('app-user', User)

new Vue({
  el: '#app', //bind to the element with the id, app
  router: router,
  render: h => h(App)
})
