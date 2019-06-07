<template lang="html">
  <div class="AlertBox" :class="'AlertBox--' + alert.type">
    <p class="AlertBox-message">{{ alert.message }}</p>
  </div>
</template>

<script>
export default {
  name: 'AlertBox',
  props: {
    alert: {
      type: Object,
      default() {
        return {
          message: 'This is an alert!',
          type: 'default'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .AlertBox {
    background: #eee;
    width: 100%;
    max-width: 32em;
    text-align: center;
    padding: 1em;
    margin-bottom: 1rem;

    &--error {
      background: $error-red;
      color: #fff;
    }
    &--info {
      background: $google-blue;
      color: #fff;
    }

    p {
      margin: 0;
    }
  }
</style>
