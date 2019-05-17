<template lang="html">
  <div class="Bookmark">
    <a :href="url" :title="url" class="Bookmark-link">
      <img :src="url + '/favicon.ico'" class="Bookmark-favicon" target="_blank">
      {{ title }}
    </a>
    <div class="Bookmark-editTools">
      <i @click="starBookmark(id)" class="fas fa-star" title="Star"></i>
      <i @click="editBookmark(id)" class="fas fa-edit" title="Edit"></i>
      <i @click="deleteBookmark(id)" class="fas fa-trash" title="Delete"></i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Bookmark',
  props: ['id', 'title', 'url'],
  methods: {
    ...mapActions({
      deleteBookmark: 'bookmarks/deleteBookmark'
    })
  }
}
</script>

<style lang="scss" scoped>
  .Bookmark {
    display: flex;
    justify-content: space-between;
    align-items: center;

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

      i.starred {
        color: #ffef51;
      }

    }

  }
</style>
