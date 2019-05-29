import { fireAuth } from '@/plugins/firebase.js';

// STATE
export const state = () => ({
  isAuthenticated: false,
  user: null
});

// ACTIONS
export const actions = {

  // Create a new user in Firebase
  async createUser( { commit }, userData ) {
    const credentials = await fireAuth
      .createUserWithEmailAndPassword(userData.email, userData.password)
      .catch( error => console.log('Error: ' + error.message) );

    // Build user object for store
    // const user = {
    //   uid: credentials.user.uid,
    //   email: credentials.user.email,
    //   photo: credentials.user.photoURL
    // };
    // Set active user in store
    commit('MU_SetActiveUser', user);
  },

  // Sign in
  async signIn( { commit } ) {

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
  MU_SetActiveUser: (state, user) => {
    state.isAuthenticated = true;
    (state.user = user);
  },
  MU_ClearActiveUser: (state) => {
    state.isAuthenticated = false;
    state.user = null;
  }
};
