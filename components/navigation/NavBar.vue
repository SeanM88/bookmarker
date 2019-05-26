<template lang="html">
  <nav class="NavBar">
    <nuxt-link to="/" class="Logo">Bookmarker</nuxt-link>
  <!-- v-if: loggedIn = true -->
    <!-- <nuxt-link to="/account/logout">Log Out</nuxt-link> -->
  <!-- v-else: -->
    <nuxt-link to="/account/login">Login</nuxt-link>
    <nuxt-link to="/account/signup">Sign Up</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
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
