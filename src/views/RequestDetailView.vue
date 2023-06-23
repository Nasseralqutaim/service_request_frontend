<template>
  <div>
    <div id="nae">
      <h1>Request Details:</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <p>
          <strong>Description:</strong>
          {{ request.description }}
        </p>
        <p>
          <strong>Status:</strong>
          {{ request.status }}
        </p>
        <p>
          <strong>Urgency Level:</strong>
          {{ request.urgency_level }}
        </p>
        <p>
          <strong>Expected Completion Date:</strong>
          {{ request.expected_completion_date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      request: {},
      loading: true,
    };
  },
  props: {
    id: String,
  },
  async created() {
    const response = await axios.get(`/requests/${this.$route.params.id}`);
    this.request = response.data;
    this.loading = false;
  },
};
</script>

<style>
#nae {
  font: 100% "Raleway", sans-serif;
  background: #f5f5f5;
  color: #000000;
  margin: 20px;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000000;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
</style>
