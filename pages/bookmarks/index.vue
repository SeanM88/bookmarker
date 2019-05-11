<template lang="html">
  <div class="page">
    <Bookmark v-for="b in bookmarks" :key="b.id" :title="b.title" :url="b.url" />
  </div>
</template>

<script>
import Bookmark from '../../components/Bookmark';

export default {
  components: {
    Bookmark
  },
  computed: {
    bookmarks() {
      return this.$store.state.bookmarks.all;
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
