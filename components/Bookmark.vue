<template lang="html">
  <div class="Bookmark">
    <a :href="url" :title="url">
      <img :src="url + '/favicon.ico'" class="favicon" target="_blank">
      {{ title }}
    </a>
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
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      padding: 6px;
      color: #333;
      text-decoration: none;
      line-height: 1;
    }
    .favicon {
      height: 1em;
      width: 1em;
      margin-right: 4px;
    }
  }
</style>
