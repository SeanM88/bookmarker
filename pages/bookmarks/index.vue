<template lang="html">
  <div class="Page--bookmarks">
    <section class="Bookmarks">
      <header class="Bookmarks-header">
        <h1>Bookmarks</h1>
        <button @click="toggleForm" class="Button">Add Bookmark</button>
      </header>

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
import { mapState } from 'vuex';
// Components
import Bookmark from '@/components/bookmarks/Bookmark';
import BookmarkForm from '@/components/bookmarks/BookmarkForm';
// Utils
import formToggle from '@/mixins/formToggle.js';


export default {
  components: {
    Bookmark,
    BookmarkForm
  },
  mixins: [
    formToggle
  ],
  computed: {
    // mapState docs: https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
    ...mapState({
      bookmarks: state => state.bookmarks.all
    })
  },
  async created() {
    // Only attempt to fetch bookmarks for logged in users
    if (this.$store.state.account.isVerified) {
      // Only fetch once to fill state, use state from there
      if (this.$store.state.bookmarks.all.length === 0) {
        // TODO: If user actually hasn't created any bookmarks this
        // will still fire every page component load.
        console.log('ALERT — fetchBookmarks() ran here!');
        await this.$store.dispatch('bookmarks/fetchBookmarks');
      }
    }
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
