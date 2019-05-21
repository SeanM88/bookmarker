<template lang="html">
  <div class="AppSidebar">
    <ul class="SidebarMenu">

      <li>
        <nuxt-link to="/bookmarks">Bookmarks</nuxt-link>
      </li>
      <li>Notes</li>
      <li>Projects</li>
      <li>To Dos</li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar'
}
</script>

<style lang="scss" scoped>
  .AppSidebar {
    display: block;
    background: #000;
    color: #fff;
    width: 200px;
    height: 100%;

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .SidebarMenu {
    list-style: none;
  }
</style>
