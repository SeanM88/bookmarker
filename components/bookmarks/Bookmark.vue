<template lang="html">
  <div class="Bookmark">

    <div class="Bookmark-content">

      <a class="Bookmark-link" :href="bookmark.url" :title="bookmark.url">

        <img class="Bookmark-favicon" :src="bookmark.url + '/favicon.ico'" target="_blank">

        {{ bookmark.title }}

      </a>

      <ul class="Bookmark-tags TagList">
        <li class="TagList-item" v-for="tag in bookmark.tags">{{ tag }}</li>
      </ul>

      <div class="Bookmark-editTools">

        <i @click="starBookmark(bookmark)" class="fas fa-star" :class="{ 'u-isFavorite': bookmark.isFavorite }" title="Favorite"></i>
        <i @click="toggleForm" class="fas fa-edit" title="Edit"></i>
        <i @click="deleteBookmark(bookmark.id)" class="fas fa-trash" title="Delete"></i>

      </div>

    </div>

    <BookmarkForm v-if="formOpen" :bookmarkData="bookmark" is-published/>

  </div>
</template>


<script>
// vuex helpers
import { mapActions } from 'vuex';
// Components
import BookmarkForm from '@/components/bookmarks/BookmarkForm';
// Utils
import formToggle from '@/mixins/formToggle.js';


export default {
  name: 'Bookmark',
  components: {
    BookmarkForm
  },
  mixins: [
    formToggle
  ],
  props: {
    bookmark: {
      type: Object
    }
  },
  methods: {
    ...mapActions({
      deleteBookmark: 'bookmarks/deleteBookmark',
      starBookmark: 'bookmarks/starBookmark'
    })
  }
}
</script>


<style lang="scss" scoped>
  .Bookmark {

    &-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &-link {
      display: flex;
      align-items: center;
      padding: 6px;
      color: #333;
      text-decoration: none;
      line-height: 1;
    }

    &-favicon {
      height: 1em;
      width: 1em;
      margin-right: 4px;
    }

    &-editTools {

      i {
        font-size: 14px;
        color: #ddd;
        margin-left: 5px;

        &:hover {
          color: #333;
        }

      }

      i.u-isFavorite {
        color: #ffef51;
      }

    }

  }

  .TagList {
    display: flex;
    font-size: 0.75rem;
    list-style: none;
    margin-left: auto;

    &-item {
      display: inline-block;
      line-height: 1;
      background-color: #eee;
      padding: 0.25em 0.5em;
      margin-right: 4px;
      border-radius: 2px;
      cursor: pointer;
    }
  }
</style>
