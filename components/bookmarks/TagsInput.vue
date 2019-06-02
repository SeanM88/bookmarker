<template lang="html">
  <ul class="TagsInput">
    <li v-for="tag in tagList" class="TagsInput-tag">
      {{ tag }}
      <i @click="deleteTag(tag)" class="fas fa-times" title="Delete"></i>
    </li>
    <input type="text" v-model="tag" v-on:keyup="onKeyPress" placeholder="Seperate tags with comma">
  </ul>
</template>

<script>
export default {
  name: 'TagsInput',
  data() {
    return {
      tag: '',
      tagList: this.tags
    }
  },
  props: {
    tags: {
      type: Array,
      default() { return [] }
    }
  },
  methods: {
    addTag(tag) {
      if ( this.tagList.indexOf(tag) === -1 ) {
        this.tagList.push(tag);
      }
      this.tag = '';
    },
    deleteTag(tag) {
      this.tagList = this.tagList.filter(item => item !== tag);
    },
    onKeyPress(e) {
      e.preventDefault();
      let tag = this.tag.trim();
      if ( e.key === 'Enter' && tag !== '' ) {
        this.addTag(tag);
      }
      if ( tag.slice(-1) === ',' ) {
        this.addTag(tag.slice(0, -1));
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .TagsInput {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    list-style: none;
    font-size: 0.8rem;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 0.25em;
    overflow: hidden;

    input[type="text"] {
      flex: auto;
      background: transparent;
      border: 0;
      margin: 0.25em;
      padding: 0.5em;

      &:focus {
        outline: none;
      }
    }
  }
  .TagsInput-tag {
    background: #eee;
    line-height: 1;
    white-space: nowrap;
    padding: 0.5em 2em 0.5em 0.75em;
    border-radius: 2px;
    margin: 0.25em;
    position: relative;

    i {
      position: absolute;
      right: 0.75em;
      cursor: pointer;
      opacity: .75;

      &:hover {
        opacity: 1;
      }
    }

  }
</style>
