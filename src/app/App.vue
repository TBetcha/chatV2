<!-- @format -->

<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/signup">SignUp</router-link>
    </div>
    <router-view />
    <div>
      <Home />
      <Login />
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Splash from './components/Splash.vue'
import Login from './components/Login.vue'
import { Component } from 'vue-property-decorator'

@Component
export default class extends Vue {
  //  components: { Splash, Login },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #da5e6f;
}
</style>
