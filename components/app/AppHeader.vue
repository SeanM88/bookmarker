<template lang="html">
  <header class="AppHeader">
    <NavBar />
    <GlobalAlert v-for="(alert, index) in alerts" :key="index" :alert="alert"/>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import NavBar from '@/components/app/navigation/NavBar.vue';
import GlobalAlert from '@/components/app/utils/GlobalAlert.vue';

export default {
  name: 'AppHeader',
  components: {
    NavBar,
    GlobalAlert
  },
  computed: {
    ...mapState({
      alerts: state => state.alerts.global
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
