<template lang="html">
  <div class="bookmark">
    {{ title }}
    {{ url }}
  </div>
</template>

<script>
export default {
  name: 'Bookmark',
  props: ['title', 'url']
}
</script>

<style lang="css" scoped>
</style>
