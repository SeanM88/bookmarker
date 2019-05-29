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
    max-width: 400px;
    text-align: center;
    padding: 1em;
    margin-bottom: 0.5rem;

    &--error {
      background: $error-red;
      color: #fff;
    }

    p {
      margin: 0;
    }
  }
</style>
