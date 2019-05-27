import { fireAuth } from '~/plugins/firebase.js';

// STATE
export const state = () => ({
  user: {}
});

// ACTIONS
export const actions = {

  // Create a new user in Firebase
  async createUser( { commit }, user ) {
    const credentials = await fireAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .catch(error => {
        console.log(error.message)
      });
    console.log(credentials);
  }

};

// MUTATIONS
export const mutations = {

};
