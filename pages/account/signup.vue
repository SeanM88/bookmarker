<template lang="html">
  <div class="Page--signup">

    <i class="fas fa-user-circle"></i>

    <form class="Form">
      <div class="InputField">
        <!-- <label for="account-email">Email address:</label> -->
        <input type="email" id="account-email" placeholder="Email" required />
      </div>
      <div class="InputField">
        <!-- <label for="account-password">Password:</label> -->
        <input type="password" id="account-password" placeholder="Password" required />
      </div>
      <button class="Button">Sign Up</button>
    </form>

    <p>Already have an account? <nuxt-link to="/account/login">Log In</nuxt-link>
    </p>

  </div>
</template>

<script>
export default {
  layout: 'landing',
}
</script>

<style lang="scss" scoped>
  .Page--signup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
  }
  .Form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
  }
  .InputField {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    input {
      padding: 0.25rem;
      font-size: 1rem;
    }
    label {
      font-size: 0.75rem;
      margin-bottom: 0.25rem;
    }
  }
</style>
