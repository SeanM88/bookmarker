import { fireAuth } from '@/plugins/firebase.js';

// STATE
export const state = () => ({
  isAuthenticated: false,
  user: null,
  alerts: []
});

// ACTIONS
export const actions = {

  // Create a new user in Firebase
  async createUser( { commit }, userData ) {
    const credentials = await fireAuth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .catch( error => {
         let alert = {
           type: 'error',
           message: error.message
         }
         commit('MU_AccountAlert', alert);
      });
      // Currently state is updated in plugins/auth.js
  },

  // Sign in
  async signIn( { commit }, userData ) {
    const credentials = await fireAuth
      .signInWithEmailAndPassword(userData.email, userData.password)
      .catch( error => {
         let alert = {
           type: 'error',
           message: error.message
         }
         commit('MU_AccountAlert', alert);
      });
      // Currently state is updated in plugins/auth.js
  },

  // Sign out
  async signOut( { commit } ) {
    await fireAuth.signOut();
    // Clear active user in store
    commit('MU_ClearActiveUser');
  },

};

// MUTATIONS
export const mutations = {
  MU_AccountAlert: (state, alert) => state.alerts = [alert],
  MU_SetActiveUser: (state, user) => {
    state.isAuthenticated = true;
    (state.user = user);
  },
  MU_ClearActiveUser: (state) => {
    state.isAuthenticated = false;
    state.user = null;
  }
};
