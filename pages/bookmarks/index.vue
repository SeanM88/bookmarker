<template lang="html">
  <div class="page">
    <div v-for="b in bookmarks" :key="b.id" class="bookmark">
    {{ b.title }}
    {{ b.url }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookmarks: [
        {
          id: 1,
          title: 'Google',
          url: 'https://www.google.com/',
          tags: ['search', 'seo']
        },
        {
          id: 2,
          title: 'ESPN',
          url: 'http://www.espn.com/',
          tags: ['sports', 'NFL']
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  .page {
    padding: 2rem;
  }
  .bookmark {
    display: block;
    padding: 1rem 2rem;
    border: 1px solid #eee;
    margin: 1rem 0;
  }
</style>
