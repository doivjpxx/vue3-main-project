<template>
  <form @submit.prevent="submitForm">
    <base-card>
      <div class="form-control">
        <label for="email">
          Email
        </label>
        <input type="email" id="email" name="email" v-model.trim="email" />
      </div>
      <div class="form-control">
        <label for="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          v-model.trim="password"
        />
      </div>
      <p v-if="!formIsValid">
        Please check your form!
      </p>
      <base-button>{{ submitButtonCaptions }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{
        switchModeButtonCaptions
      }}</base-button>
    </base-card>
  </form>
</template>

<script>
export default {
  name: 'UserAuth',
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login'
    };
  },
  computed: {
    submitButtonCaptions() {
      if (this.mode === 'login') {
        return 'Login';
      }
      return 'Sign up';
    },
    switchModeButtonCaptions() {
      if (this.mode === 'login') {
        return 'Signup Instead';
      }
      return 'Login Instead';
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === '' || this.password === '') {
        return (this.formIsValid = false);
      }
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        return (this.mode = 'signup');
      }
      return (this.mode = 'login');
    }
  }
};
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>
