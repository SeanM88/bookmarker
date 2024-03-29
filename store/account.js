import { fireAuth, providerGoogle } from '@/plugins/firebase.js';

// STATE
export const state = () => ({
  user: null
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

    } catch (error) {
      const alert = {
        type: 'error',
        message: error.message
      }
      commit('alerts/MU_AccountAlert', alert, {root: true});
    }
    // Currently state is updated in plugins/auth.js
  },

  async verifyUser( { commit } ) {
    try {
      const user = await fireAuth.currentUser;
      // https://firebase.google.com/docs/auth/web/passing-state-in-email-actions#passing_statecontinue_url_in_email_actions
      const actionCodeSettings = {
        url: 'http://localhost:3000',
        handleCodeInApp: false
      };
      const response = await user.sendEmailVerification(actionCodeSettings);
      console.log('ACTION: verifyUser just ran');
    } catch (error) {
      const alert = {
        type: 'error',
        message: `${error.code} - ${error.message}`
      }
      commit('alerts/MU_AccountAlert', alert, {root: true});
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
      const alert = {
        type: 'error',
        message: error.message
      }
      commit('alerts/MU_AccountAlert', alert, {root: true});
    }
    // Currently state is updated in plugins/auth.js
  },

  async logInWithGoogle( { commit } ) {

    try {
      const credentials = await fireAuth.signInWithRedirect(providerGoogle);
      // this.$router.push('/');
    } catch ( error ) {
      console.log(`Error: ${error.code} - ${error.message}`);
      const alert = {
        type: 'error',
        message: error.message
      }
      // commit('MU_AccountAlert', alert);
      commit('alerts/MU_AccountAlert', alert, {root: true});
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
  // MU_AccountAlert: (state, alert) => state.alerts = [alert],

  MU_SetActiveUser: (state, user) => {
    console.log('MU_SetActiveUser just ran!');
    (state.user = user);
  },

  MU_ClearActiveUser: (state) => {
    state.user = null;
  }
};
