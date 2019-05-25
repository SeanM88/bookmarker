<template lang="html">
  <nav class="NavBar">
    <a href="#">Login</a>
    <a href="#">Sign Up</a>
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
