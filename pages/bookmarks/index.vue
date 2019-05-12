<template lang="html">
  <div class="page">
    <AddBookmark />
    <Bookmark v-for="b in bookmarks" :key="b.id" :title="b.title" :url="b.url" />
  </div>
</template>

<script>
import AddBookmark from '../../components/AddBookmark';
import Bookmark from '../../components/Bookmark';

export default {
  components: {
    AddBookmark,
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
</style>
