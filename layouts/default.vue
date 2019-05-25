<template>
  <div class="container">
    <!-- <NavBar /> -->
    <SideBar />
    <nuxt />
  </div>
</template>

<script>
// import NavBar from '../components/navigation/NavBar';
import SideBar from '../components/navigation/SideBar';

export default {
  components: {
    // NavBar,
    SideBar
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
