import Vue from 'vue'
import App from './App.vue'

import User from './assets/components/User.vue' //register our main.js file.

Vue.component('app-user', User)

new Vue({
  el: '#app',
  render: h => h(App)
})
