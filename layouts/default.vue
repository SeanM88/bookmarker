<template lang="html">
  <div class="Site">
    <div class="Site-header">
      <NavBar />
    </div>
    <div class="Site-body">
      <SideBar />
      <nuxt class="Page"/>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/navigation/NavBar';
import SideBar from '../components/navigation/SideBar';

export default {
  components: {
    NavBar,
    SideBar
  }
}
</script>

<style lang="scss">
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  .Site {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;

    &-body {
      display: flex;
      flex-direction: row;
      height: 100%;
    }
  }
  .Page {
    flex: auto;
    padding: 1rem;
  }
</style>
