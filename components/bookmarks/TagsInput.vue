<template lang="html">
  <ul class="TagsInput">
    <li v-for="tag in tagList" class="TagsInput-tag">
      {{ tag }}
      <i @click="deleteTag(tag)" class="fas fa-times" title="Delete"></i>
    </li>
    <input type="text" v-model="tag" v-on:keyup.prevent="onKeyPress" placeholder="Seperate tags with comma">
  </ul>
</template>

<script>
export default {
  name: 'TagsInput',
  data() {
    return {
      tag: '',
      // Set tagList to value of prop 'tags' for reactive data
      tagList: this.tags
    }
  },
  props: {
    tags: {
      type: Array,
      // If no tags passed down, we initialize prop to empty array
      default() { return [] }
    }
  },
  watch: {
    // watch for changes to the 'tagList' array
    tagList: function(newTags, oldTags) {
      // if 'tagList' value has changed, emit event 'tagsUpdated'
      // and pass the updated value as 'newTags'
      // so parent component can use that updated value
      this.$emit('tagsUpdated', newTags);
    }
  },
  methods: {
    addTag(tag) {
      // Prevent duplicate tags
      if ( this.tagList.indexOf(tag) === -1 ) {
        this.tagList = [...this.tagList, tag];
      }
      this.tag = '';
    },
    deleteTag(tag) {
      this.tagList = this.tagList.filter(item => item !== tag);
    },
    // This event fires while typing (specifically the 'keyup' event)
    onKeyPress(e) {
      let tag = this.tag.trim();
      // lets user declare tag by pressing enter
      if ( e.key === 'Enter' && tag !== '' ) {
        this.addTag(tag);
      }
      // lets user declare tags seperated by commas
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
