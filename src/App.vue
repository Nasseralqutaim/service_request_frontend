<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/service-request-icon-1.png" />
    <nav>
      <router-link to="/">Home</router-link>
      <span>&nbsp;</span>
      <span v-if="isLoggedIn">Logged In</span>
      <!-- <span v-else>Logged Out</span> -->
      <span>&nbsp;</span>

      <router-link to="/signup">Signup</router-link>
      <span>&nbsp;</span>
      <router-link to="/login">Login</router-link>
      <span>&nbsp;</span>
      <router-link to="/logout">Logout</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      console.log("Route has changed!");
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
