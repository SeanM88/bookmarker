export default {

  data() {
    return {
      formOpen: false
    }
  },

  methods: {
    toggleForm() {
      this.formOpen = !this.formOpen;
    }
  }

}
