<template lang="html">
  <nav class="NavBar">

    <nuxt-link to="/" class="Logo">Bookmarker</nuxt-link>

    <template v-if="isAuthenticated">
      <nuxt-link to="/account/logout">Log Out</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link to="/account/login">Login</nuxt-link>
      <nuxt-link to="/account/signup">Sign Up</nuxt-link>
    </template>

  </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'NavBar',
  computed: {
    ...mapState({
      isAuthenticated: state => state.account.isAuthenticated,
      user: state => state.account.user
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
</style>
