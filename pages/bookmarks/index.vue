<template lang="html">
  <div class="Page Page--bookmarks">
    <AddBookmark />
    <Bookmark v-for="bookmark in bookmarks"
      :key="bookmark.id"
      :bookmark="bookmark"
    />
  </div>
</template>

<script>
// vuex helpers
import { mapState, mapActions } from 'vuex';
// Components
import AddBookmark from '../../components/AddBookmark';
import Bookmark from '../../components/Bookmark';

export default {
  components: {
    AddBookmark,
    Bookmark
  },
  // mapState docs: https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
  computed: {
    ...mapState({
      bookmarks: state => state.bookmarks.all
    })
  },
  methods: {
    ...mapActions({
      fetchBookmarks: 'bookmarks/fetchBookmarks'
    })
  },
  created() {
    this.fetchBookmarks();
  }
}
</script>

<style lang="scss" scoped>
  .Page {
    padding: 2rem;
  }
</style>
