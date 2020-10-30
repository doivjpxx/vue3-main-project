<template>
  <div>
    <base-dialog :show="!!error" :title="'An error occured'" @close="closeDialog">
      <p>{{ error }}</p>
    </base-dialog>
  </div>
  <section>
    <coach-filter @change-filter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button v-if="!isCoach && !isLoading" link to="/register">Register as Coach</base-button>
      </div>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-else-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName"
                    :lastName="coach.lastName" :rate="coach.rate" :areas="coach.areas">
        </coach-item>
      </ul>
      <h3 v-else>No coaches found.</h3></base-card>
  </section>
</template>

<script>
  import CoachItem from '../../components/coaches/CoachItem';
  import CoachFilter from '../../components/coaches/CoachFilter';
  import BaseDialog from '../../components/ui/BaseDialog';

  export default {
    name: 'CoachesList',
    components: { BaseDialog, CoachFilter, CoachItem },
    computed: {
      isCoach() {
        return this.$store.getters['coaches/isCoach'];
      },
      filteredCoaches() {
        const coaches = this.$store.getters['coaches/getCoaches'];
        return coaches.filter(coach => {
          if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
            return true;
          }
          if (this.activeFilters.backend && coach.areas.includes('backend')) {
            return true;
          }
          if (this.activeFilters.career && coach.areas.includes('career')) {
            return true;
          }
          return false;
        });
      },
      hasCoaches() {
        return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
      }
    },
    data() {
      return {
        isLoading: false,
        error: '',
        activeFilters: {
          frontend: true,
          backend: true,
          career: true
        }
      };
    },
    created() {
      this.loadCoaches();
    },
    methods: {
      setFilters(updatedFilters) {
        this.activeFilters = updatedFilters;
      },
      async loadCoaches() {
        this.isLoading = true;
        try {
          await this.$store.dispatch('coaches/loadCoaches');
        } catch (err) {
          this.error = err.message || 'Something when wrong!';
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
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>