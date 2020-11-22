<!-- @format -->

<template>
  <v-container>
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

  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
export default class Splash extends Vue {
  //something here
}
</script>
