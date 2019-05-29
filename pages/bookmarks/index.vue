<template lang="html">
  <div class="Page--bookmarks">
    <section class="Bookmarks">
      <header class="Bookmarks-header">
        <h1>Bookmarks</h1>
        <button @click="addBookmarkForm" class="Button">Add Bookmark</button>
      </header>
      <!-- <template v-if -->
      <BookmarkForm v-if="formOpen"/>
      <Bookmark v-for="bookmark in bookmarks"
        :key="bookmark.id"
        :bookmark="bookmark"
      />
    </section>
  </div>
</template>

<script>
// vuex helpers
import { mapState, mapActions } from 'vuex';
// Components
import BookmarkForm from '@/components/bookmarks/BookmarkForm';
import Bookmark from '@/components/bookmarks/Bookmark';

export default {
  components: {
    BookmarkForm,
    Bookmark
  },
  computed: {
  // mapState docs: https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
    ...mapState({
      bookmarks: state => state.bookmarks.all
    })
  },
  data() {
    return {
      formOpen: false
    }
  },
  methods: {
    ...mapActions({
      fetchBookmarks: 'bookmarks/fetchBookmarks'
    }),
    addBookmarkForm() {
      this.formOpen = !this.formOpen;
    }
  },
  created() {
    this.fetchBookmarks();
  }
}
</script>

<style lang="scss" scoped>

  .Bookmarks-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;

    h1 {
      margin: 0;
    }
  }
</style>
