<template lang="html">
  <div class="Page--signup">

    <i class="fas fa-user-circle"></i>

    <form class="Form" @submit="onSubmit">
      <div class="InputField">
        <input type="email" v-model="userInput.email" placeholder="Email" required />
      </div>
      <div class="InputField">
        <input type="password" v-model="userInput.password" placeholder="Password" required />
      </div>
      <button class="Button">Sign Up</button>
    </form>

    <p>Already have an account? <nuxt-link to="/account/login">Log In</nuxt-link>
    </p>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  layout: 'landing',
  data() {
    return {
      userInput: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions({
      createUser: 'account/createUser'
    }),
    onSubmit(e) {
      e.preventDefault();
      this.createUser(this.userInput);
    }
  }
}
</script>

<style lang="scss" scoped>
  .Page--signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
  }
  .Form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  .InputField {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    input {
      padding: 0.25rem;
      font-size: 1rem;
    }
    label {
      font-size: 0.75rem;
      margin-bottom: 0.25rem;
    }
  }
</style>
