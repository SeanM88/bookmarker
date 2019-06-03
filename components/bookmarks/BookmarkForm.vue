<template lang="html">
  <div class="BookmarkForm">

    <form @submit.prevent="onSubmit" @keydown.enter.prevent.self>
      <input type="text" v-model="bookmark.title" placeholder="Bookmark Title...">
      <input type="text" v-model="bookmark.url" placeholder="URL">
      <TagsInput :tags="bookmark.tags" v-on:tagsUpdated="updateTags"/>
      <button type="submit" class="Button">Save</button>
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
        title: this.bookmarkData.title,
        url: this.bookmarkData.url,
        isFavorite: this.bookmarkData.isFavorite,
        tags: this.bookmarkData.tags,
        ...(this.bookmarkData.id ? { id: this.bookmarkData.id } : null),
        ...(this.bookmarkData.created ? { created: this.bookmarkData.created } : null)
      }
    }
  },
  props: {
    bookmarkData: {
      type: Object,
      default() {
        return {
          title: '',
          url: '',
          isFavorite: false,
          tags: []
        }
      }
    },
    isPublished: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    }
  },
  methods: {
    ...mapActions({
      addBookmark: 'bookmarks/addBookmark',
      editBookmark: 'bookmarks/editBookmark'
    }),
    updateTags(newTags) {
      this.bookmark.tags = newTags;
    },
    onSubmit() {
      if (this.isPublished) {
        console.log('EDIT FIRED!')
        console.log(this.bookmark.title);
        console.log(this.bookmark.created);
        this.editBookmark(this.bookmark);
      } else {
        console.log('CREATE FIRED!')
        this.addBookmark(this.bookmark);
      }
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
