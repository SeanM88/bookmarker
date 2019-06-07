<template lang="html">
  <div class="GlobalAlert" :class="'GlobalAlert--' + alert.type">
    <p>{{ alert.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'GlobalAlert',
  props: {
    alert: {
      type: Object,
      default() {
        return {
          message: '',
          type: 'default'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .GlobalAlert {
    background: $color-info;
    color: #fff;
    text-align: center;
    padding: 0.5em;

    &--error {
      background: $color-error;
      color: #fff;
    }
    &--info {
      background: $color-info;
      color: #fff;
    }

    p {
      margin: 0;
    }
  }
</style>
