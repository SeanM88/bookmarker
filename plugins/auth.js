import { fireAuth } from '@/plugins/firebase.js';

export default (context) => {
  const { store } = context;

  return new Promise((resolve, reject) => {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        let activeUser = {
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          uid: user.uid
        }
        return resolve(store.commit('account/MU_SetActiveUser', activeUser));
      }
      return resolve();
    })
  })
};
