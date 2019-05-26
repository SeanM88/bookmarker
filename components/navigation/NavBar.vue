<template lang="html">
  <nav class="NavBar">
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

    a {
      text-decoration: none;
      color: #fff;
      display: inline-block;
      padding: 0.5em;
      margin-right: 1rem;
    }
  }
</style>
