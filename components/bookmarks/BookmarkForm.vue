<template lang="html">
  <div class="BookmarkForm">

    <form @submit="onSubmit">
      <input type="text" v-model="bookmark.title" placeholder="Bookmark Title...">
      <input type="text" v-model="bookmark.url" placeholder="URL">
      <TagsInput :tags="bookmark.tags"/>
      <input type="submit" value="Save" class="Button">
    </form>

  </div>
</template>

<script>
import TagsInput from './TagsInput';
import { mapActions } from 'vuex';

export default {
  name: 'BookmarkForm',
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
  .BookmarkForm {
    margin-bottom: 1rem;
  }
</style>
