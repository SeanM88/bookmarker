<template lang="html">
  <div class="AddBookmark">

    <form @submit="onSubmit">
      <input type="text" v-model="bookmark.title" placeholder="Bookmark Title...">
      <input type="text" v-model="bookmark.url" placeholder="URL">
      <!-- <input type="text" v-model="bookmark.tags" placeholder="Enter tags seperated by comma"> -->
      <TagsInput :tags="bookmark.tags"/>
      <input type="submit" value="Add">
    </form>

  </div>
</template>

<script>
import TagsInput from './TagsInput'
import { mapActions } from 'vuex';

export default {
  name: 'AddBookmark',
  components: {
    TagsInput
  },
  data() {
    return {
      bookmark: {
        title: '',
        url: '',
        isFavorite: false,
        tags: []
      }
    }
  },
  methods: {
    ...mapActions({
      addBookmark: 'bookmarks/addBookmark'
    }),
    onSubmit(e) {
      e.preventDefault();
      this.addBookmark(this.bookmark);
      this.bookmark = {
        title: '',
        url: '',
        isFavorite: false,
        tags: []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .AddBookmark {
    margin-bottom: 1rem;
  }
</style>
