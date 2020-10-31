<template>
  <div>
    <div>
      <base-dialog
        :show="!!error"
        :title="'An error occured'"
        @close="closeDialog"
      >
        <p>{{ error }}</p>
      </base-dialog>
    </div>
    <section>
      <base-card>
        <header>
          <h2>Requests Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-if="hasRequests && !isLoading">
          <request-item
            v-for="request in receivedRequests"
            :key="request.id"
            :email="request.userEmail"
            :message="request.message"
          ></request-item>
        </ul>
        <h3 v-else>
          You haven't received any requests yeT!
        </h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem';
import BaseDialog from '../../components/ui/BaseDialog';

export default {
  name: 'RequestsList',
  components: { BaseDialog, RequestItem },

  data() {
    return {
      isLoading: false,
      error: null
    };
  },

  created() {
    this.loadRequests();
  },

  computed: {
    receivedRequests() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },

  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequest');
      } catch (err) {
        this.error = err.message;
      }
      this.isLoading = false;
    },
    closeDialog() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
