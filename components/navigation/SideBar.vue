<template lang="html">
  <div class="SideBar">
    <ul class="SideBar-menu">

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
  name: 'SideBar'
}
</script>

<style lang="scss" scoped>
  .SideBar {
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

  .SideBar-menu {
    list-style: none;
  }
</style>
