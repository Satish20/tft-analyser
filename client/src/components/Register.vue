<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="email" v-model="email" />
    <br />
    <input type="password" name="password" placeholder="password" v-model="password" />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AuthenticationService from "../services/AuthenticationService";

@Component
export default class Register extends Vue {
  private password = "";
  private email = "";

  async register() {
    const response = await AuthenticationService.register({
      email: this.email,
      password: this.password
    });
    console.log(response.data);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
