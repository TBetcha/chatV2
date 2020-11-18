<!-- @format -->

<template>
  <div>
    <v-form action="submit">
      <p>Username</p>
      <input type="text" v-model="username" />
      <p>Password</p>
      <input type="password" v-model="password" />
    </v-form>
    <vbutton class="btn" @click="handleLogin()">Login</vbutton>
    <router-link to="signup">
      <button class="btn">New Here?</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import VueRouter from 'vue-router'

export default class extends Vue {
  user = ''
  password = ''
  handleLogin = (user: string, password: string) => {
    //if username and password are wrong deny
    // if right proceed
  }
}
</script>
<style scoped>
.btn {
  font-weight: bold;
  color: #da5e6f;
  cursor: pointer;
}
.btn:active {
  background-color: white;
}
</style>
