<template>
  <section>
    <h2>Register as a coach now!</h2>
    <coach-form @save-data="saveData"></coach-form>
  </section>
</template>

<script>
  import CoachForm from '../../components/coaches/CoachForm';
  export default {
    name: 'CoachRegister',
    components: { CoachForm },
    computed: {

    },
    methods: {
      saveData(formData) {
        console.log(formData);
        this.$store.dispatch('coaches/addCoach', formData);
        this.$router.replace('/coaches');
      }
    }
  };
</script>

<style scoped>

</style>