<template lang="html">
  <div class="AddBookmark">
    <form @submit="onSubmit">
      <input type="text" v-model="title" placeholder="Bookmark Title...">
      <input type="text" v-model="url" placeholder="URL">
      <input type="submit" value="Add">
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddBookmark',
  data() {
    return {
      title: '',
      url: ''
    }
  },
  methods: {
    async onSubmit(e) {
      e.preventDefault();
    }
  }
}
</script>

<style lang="scss" scoped>
  .AddBookmark {
    margin-bottom: 1rem;
  }
</style>
