import Vue from 'vue'
import App from './App.vue'

import User from './assets/components/User.vue' //register our main.js file.

Vue.component('app-user', User)

new Vue({
  el: '#app', //bind to the element with the id, app
  render: h => h(App)
})
