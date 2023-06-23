<template>
  <!-- Create HTML for a welcome page below -->
  <h1>Welcome to Service Reqest Platform</h1>
  <p>Here you can find all the information you need to get started with our product.</p>
  <p>Click on the links above to learn more.</p>
  <router-link to="/">Home</router-link>
  <router-link to="/signup">Signup</router-link>
  <router-link to="/login">Login</router-link>
  <router-link to="/logout">Logout</router-link>
</template>

<script></script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

#app {
  font-family: Avenir, Helvetica, "Times New Roman", Times, serif, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #502c2c;
  margin-top: 60px;
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 10px;
}

router-link {
  display: inline-block;
  margin: 5px;
  color: #502c2c;
  text-decoration: none;
  border: 1px solid #502c2c;
  padding: 5px 10px;
  border-radius: 4px;
}

router-link:hover {
  background-color: #502c2c;
  color: #fff;
}
</style>
