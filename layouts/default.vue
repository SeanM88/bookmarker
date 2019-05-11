<template>
  <div class="container">
    <!-- <AppHeader /> -->
    <AppSidebar />
    <nuxt />
  </div>
</template>

<script>
// import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSidebar';

export default {
  components: {
    // AppHeader,
    AppSidebar
  }
}
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
  }
</style>
