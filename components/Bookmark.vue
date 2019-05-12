<template lang="html">
  <div class="Bookmark">
    <a :href="url" :title="url">{{ title }}</a>
  </div>
</template>

<script>
export default {
  name: 'Bookmark',
  props: ['title', 'url']
}
</script>

<style lang="scss" scoped>
  .Bookmark {
    display: block;
    padding: 10px;
    margin: 0 0 10px;
    background: #eee;
    border: 1px solid #ddd;

    a {
      color: #333;
      text-decoration: none;
    }
  }
</style>
