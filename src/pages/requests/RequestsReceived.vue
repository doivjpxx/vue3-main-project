<template>
  <h1>RequestsList work!</h1>
  <ul>
    <li v-for="req in requests" :key="req.id">{{req.message}}</li>
  </ul>
</template>

<script>
  export default {
    name: 'RequestsList',
    data() {
      return {
        requests: this.$store.getters['requests/getRequests']
      };
    }
  };
</script>

<style scoped>

</style>