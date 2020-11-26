<!-- @format -->

<template>
  <v-app>
    <div class="home">
      <h1>"Welcome To ChatterBox"</h1>
      <img alt="Vue logo" src="./../assets/chatbub.png" />
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
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import io from 'socket.io-client';
@Component({})
export default class Home extends Vue {
  handleLogin() {
    this.$socket.emit('connection');
  }
}
</script>

<style scoped>
.btn {
  font-weight: bold;
  color: #da5e6f;
}
</style>
