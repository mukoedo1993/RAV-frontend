<template>
  <div id="app">
      <div>
        <router-link to="/">Home</router-link> <!--router-link works here for our vue project-->
        <router-link to="/Account">Blog</router-link>
        <router-link to="/Blog">Account</router-link>
      </div>
      <router-view></router-view>
      <!--<app-user></app-user>-->
       <p>This is a test, test name is hehe!</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App' //In this way,
    }
  }
}
</script>
