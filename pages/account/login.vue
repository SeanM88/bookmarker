<template lang="html">
  <div class="Page--login">

    <i class="fas fa-user-circle"></i>

    <AlertBox v-for="(alert, index) in alerts" :key="index" :alert="alert"/>

    <form class="Form" @submit.prevent="onSubmit">
      <div class="InputField">
        <input type="email" v-model="userInput.email" placeholder="Email" required />
      </div>
      <div class="InputField">
        <input type="password" v-model="userInput.password" placeholder="Password" required />
      </div>
      <button class="Button">Log In</button>
    </form>

    <div class="Providers">
      <button class="Button Button--google" @click.prevent="logInWithGoogle">
        <i class="fab fa-google"></i>
        Log in with Google
      </button>
    </div>

    <p>Don't have an account? <nuxt-link to="/account/signup">Sign Up</nuxt-link>
    </p>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AlertBox from '@/components/app/utils/AlertBox.vue';

export default {
  layout: 'landing',
  components: {
    AlertBox
  },
  computed: {
    ...mapState({
      alerts: state => state.account.alerts
    })
  },
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
      logInWithEmail: 'account/logInWithEmail',
      logInWithGoogle: 'account/logInWithGoogle'
    }),
    onSubmit() {
      this.logInWithEmail(this.userInput);
    }
  },
  head() {
    return {
      title: 'Welcome back! | Bookmarker'
    }
  }
}
</script>

<style lang="scss" scoped>
  .Page--login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i.fa-user-circle {
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
  .Providers {
    display: flex;
    flex-direction: column;
  }
  .Button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    line-height: 1;
    padding: 1em;
    margin-bottom: 0.5rem;
    cursor: pointer;

    i {
      margin-right: 0.5em;
    }

    &--google {
      background: $google-red;
      color: #fff;
    }
  }
</style>
