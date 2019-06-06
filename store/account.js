import { fireAuth, providerGoogle } from '@/plugins/firebase.js';

// STATE
export const state = () => ({
  isVerified: false,
  user: null,
  alerts: []
});

// ACTIONS
export const actions = {

  // Create a new user in Firebase
  async createUser( { dispatch, commit }, userData ) {

    try {

      const credentials = await fireAuth
        .createUserWithEmailAndPassword(userData.email, userData.password);

      await dispatch('verifyUser');

      // this.$router.push('/account/login');

      // let alert = {
      //   type: 'info',
      //   message: 'Please use the link in the email you just received to verify your account and then return to this page to sign in'
      // }
      // commit('MU_AccountAlert', alert);

    } catch (error) {
      let alert = {
        type: 'error',
        message: error.message
      }
      commit('MU_AccountAlert', alert);
    }
    // Currently state is updated in plugins/auth.js
  },

  async verifyUser( { commit } ) {
    try {
      const user = await fireAuth.currentUser;
      const response = await user.sendEmailVerification();
    } catch (error) {
      let alert = {
        type: 'error',
        message: error.message
      }
    }
  },

  // Log user in
  async logInWithEmail( { commit }, userData ) {

    try {
      const credentials = await fireAuth
        .signInWithEmailAndPassword(userData.email, userData.password);
        this.$router.push('/');
    } catch ( error ) {
      console.log(`Error: ${error.code} - ${error.message}`);
      let alert = {
        type: 'error',
        message: error.message
      }
      commit('MU_AccountAlert', alert);
    }
    // Currently state is updated in plugins/auth.js
  },

  async logInWithGoogle( { commit } ) {

    try {
      const credentials = await fireAuth.signInWithRedirect(providerGoogle);
      // this.$router.push('/');
    } catch ( error ) {
      console.log(`Error: ${error.code} - ${error.message}`);
      let alert = {
        type: 'error',
        message: error.message
      }
      commit('MU_AccountAlert', alert);
    }

  },

  // Log user out
  async logOut( { commit } ) {
    await fireAuth.signOut();
    // Clear active user in store
    commit('MU_ClearActiveUser');
    // commit('account/MU_ClearBookmarks');
    this.$router.push('/account/login');
  },

};

// MUTATIONS
export const mutations = {
  MU_AccountAlert: (state, alert) => state.alerts = [alert],

  MU_SetActiveUser: (state, user) => {
    console.log('MU_SetActiveUser just ran!');
    state.isVerified = true;
    (state.user = user);
  },

  MU_ClearActiveUser: (state) => {
    state.isVerified = false;
    state.user = null;
  }
};
