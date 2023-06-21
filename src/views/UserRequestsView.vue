<template>
  <div>
    <h1>Your Requests:</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="request in requests" :key="request.id">
          <!-- Here you can format how you want to display each request -->
          {{ request.description }}
        </li>
      </ul>
    </div>

    <!-- New Request Form -->
    <h2>Create a New Request</h2>
    <form @submit.prevent="submit">
      <div>
        <label>Description:</label>
        <input type="text" v-model="newRequest.description" />
      </div>
      <div>
        <label>Urgency Level:</label>
        <input type="number" v-model="newRequest.urgency_level" />
      </div>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      requests: [],
      loading: true,
      newRequest: {
        description: "",
        urgency_level: 1,
      },
    };
  },
  async created() {
    await this.fetchRequests();
  },
  methods: {
    async fetchRequests() {
      const response = await axios.get(`/users/${localStorage.getItem("user_id")}/requests`);
      this.requests = response.data;
      this.loading = false;
    },
    async submit() {
      await axios.post(`/users/${localStorage.getItem("user_id")}/requests`, this.newRequest);
      this.newRequest = {
        description: "",
        urgency_level: 1,
      };
      await this.fetchRequests();
    },
  },
};
</script>
