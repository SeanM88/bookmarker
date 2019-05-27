<template lang="html">
  <div class="Site">
    <div class="Site-header">
      <NavBar />
    </div>
    <div class="Site-body">
      <nuxt class="Page"/>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/navigation/NavBar';

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
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
