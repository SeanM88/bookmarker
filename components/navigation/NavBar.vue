<template lang="html">
  <nav class="NavBar">

    <nuxt-link to="/" class="Logo">Bookmarker</nuxt-link>

    <template v-if="isVerified">
      <button class="Button Button--text" type="button" @click.prevent="logOut">Sign out</button>
    </template>
    <template v-else>
      <nuxt-link to="/account/login">Login</nuxt-link>
      <nuxt-link to="/account/signup">Sign Up</nuxt-link>
    </template>

  </nav>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapState({
      isVerified: state => state.account.isVerified,
      user: state => state.account.user
    })
  },
  methods: {
    ...mapActions({
      logOut: 'account/logOut'
    })
  }
}
</script>

<style lang="scss" scoped>
  .NavBar {
    display: flex;
    justify-content: flex-end;
    background: #000;
    padding: 0 0.75rem;

    a {
      text-decoration: none;
      color: #fff;
      display: inline-block;
      padding: 0.75em;
      margin-right: 1rem;
    }
    .Logo {
      margin-right: auto;
    }
  }
  .Button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    line-height: 1;
    cursor: pointer;

    &--text {
      background-color: transparent;
      color: #fff;
    }
  }
</style>
