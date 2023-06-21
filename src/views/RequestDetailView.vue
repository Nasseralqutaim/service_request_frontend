<template>
  <div>
    <h1>Request Detail</h1>
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
