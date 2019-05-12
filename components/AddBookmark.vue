<template lang="html">
  <div class="AddBookmark">
    <form>
      <input type="text" v-model="title" placeholder="Bookmark Title...">
      <input type="text" v-model="url" placeholder="URL">
      <input type="submit" value="Add">
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddBookmark',
  data() {
    return {
      title: '',
      url: ''
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
