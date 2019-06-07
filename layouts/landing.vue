<template lang="html">
  <div class="App">
    <AppHeader />
    <div class="App-body">
      <nuxt class="Page"/>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/app/AppHeader.vue';

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
  .App {
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
