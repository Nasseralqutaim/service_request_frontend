<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },

      errors: [],
      status: "",
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="signup">
    <form v-on:submit.prevent="submit()">
      <div class="section-title">
        <h2>Signup</h2>
      </div>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <div class="section-title">
          <h4>Name:</h4>
        </div>
        <input type="text" v-model="newUserParams.name" />
        <small>{{ 20 - newUserParams.name.length }} characters remaining</small>
        <br />
        <br />
      </div>
      <div>
        <div class="section-title">
          <h4>Email:</h4>
        </div>
        <input type="email" v-model="newUserParams.email" />
      </div>
      <div>
        <h4>Password:</h4>
        <input type="password" v-model="newUserParams.password" />
        <small v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6" class="text-danger">
          Must be at least 6 characters
        </small>
      </div>
      <div>
        <h4>Password Confirmation :</h4>
        <input type="password" v-model="newUserParams.password_confirmation" />
        <small v-if="newUserParams.password_confirmation !== newUserParams.password" class="text-danger">
          Passwords must match
        </small>
      </div>
      <input type="submit" value="Submit" />
    </form>
    <img v-if="status" v-bind:src="`https://http.cat/${status}`" alt="" />
  </div>
</template>

<style>
.signup {
  margin: 0 auto;
  width: 50%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.signup input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

.signup input[type="submit"] {
  background-color: #4caf50;
  color: white;
  border: none;
}

.signup input[type="submit"]:hover {
  opacity: 0.8;
}

.signup .section-title {
  margin: 10px 0;
}

.signup small {
  color: #999;
}

.signup .text-danger {
  color: red;
}

.signup img {
  width: 100%;
  margin-top: 20px;
}
</style>
