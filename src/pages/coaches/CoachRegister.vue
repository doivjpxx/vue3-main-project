<template>
  <section>
    <h2>Register as a coach now!</h2>
    <coach-form></coach-form>
  </section>
</template>

<script>
  import CoachForm from '../../components/coaches/CoachForm';
  export default {
    name: 'CoachRegister',
    components: { CoachForm }
  };
</script>

<style scoped>

</style>