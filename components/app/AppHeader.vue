<template lang="html">
  <header class="AppHeader">
    <NavBar />
  </header>
</template>

<script>
import NavBar from '@/components/app/navigation/NavBar.vue';

export default {
  name: 'AppHeader',
  components: {
    NavBar
  }
}
</script>

<style lang="scss" scoped>
</style>
