<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error has occurred"
      @close="closeDialog"
    >
      {{ error }}
    </base-dialog>
    <base-dialog :show="isLoading" :title="'Authenticating...'" fixed>
      <base-spinner></base-spinner>
    </base-dialog>
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
  </div>
</template>

<script>
export default {
  name: 'UserAuth',
  data() {
    return {
      isLoading: false,
      email: '',
      password: '',
      formIsValid: true,
      mode: 'login',
      error: null
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
    async submitForm() {
      this.formIsValid = true;
      this.isLoading = true;
      const credential = {
        email: this.email,
        password: this.password
      };
      if (this.email === '' || this.password === '') {
        return (this.formIsValid = false);
      }
      try {
        if (this.mode === 'login') {
          await this.$store.dispatch('auth/login', credential);
        } else {
          await this.$store.dispatch('auth/signup', credential);
        }
      } catch (err) {
        console.log(err);
        this.error = err.message;
      }
      this.isLoading = false;
    },
    switchAuthMode() {
      if (this.mode === 'login') {
        return (this.mode = 'signup');
      }
      return (this.mode = 'login');
    },
    closeDialog() {
      this.error = null;
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
