<template lang="html">
  <div class="Page Page--bookmarks">
    <AddBookmark />
    <Bookmark v-for="b in bookmarks" :key="b.id" :title="b.title" :url="b.url" />
  </div>
</template>

<script>
// vuex helpers
import { mapState } from 'vuex';
// Components
import AddBookmark from '../../components/AddBookmark';
import Bookmark from '../../components/Bookmark';

export default {
  components: {
    AddBookmark,
    Bookmark
  },
  // mapState docs: https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
  computed: mapState({
    bookmarks: state => state.bookmarks.all
  })
}
</script>

<style lang="scss" scoped>
  .Page {
    padding: 2rem;
  }
</style>
