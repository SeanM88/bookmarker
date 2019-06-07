<template lang="html">
  <div class="SideBar">
    <ul class="SideBar-menu">

      <li>
        <i class="fas fa-bookmark"></i>
        <nuxt-link to="/bookmarks">Bookmarks</nuxt-link>
      </li>
      <li>
        <i class="fas fa-sticky-note"></i>
        Notes
      </li>
      <li>
        <i class="fas fa-parking"></i>
        Projects
      </li>
      <li>
        <i class="fas fa-tasks"></i>
        Tasks
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style lang="scss" scoped>
  .SideBar {
    flex: initial;
    font-size: 1.125rem;
    padding: 2rem;
    background: #eee;
    height: 100%;

    ul {
      margin: 0;
      padding: 0;

      li {
        margin-bottom: 1rem;
      }
    }

    a {
      text-decoration: none;
    }
  }

  .SideBar-menu {
    list-style: none;
  }
</style>
