import { fireAuth } from '@/plugins/firebase.js';


export default (context) => {

  const { store } = context;

  return new Promise( (resolve, reject) => {

    fireAuth.onAuthStateChanged(user => {

      console.log('--- Firebase just checked current Auth State! ---');

      if (user) {

        console.log('YES, User is in onAuthStateChanged!');

        const activeUser = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL
        };

        if (user.emailVerified || user.providerData === 'google.com') {

          return resolve(store.commit('account/MU_SetActiveUser', activeUser));

        } else {

          let alert = {
            type: 'info',
            message: `Please use the link in the email sent to ${user.email} to verify your account and then return to this page to sign in`
          }
          return resolve(store.commit('account/MU_AccountAlert', alert));

        }

      }

      // If there's no user we do nothing
      console.log('There is no user in onAuthStateChanged!');
      return resolve();

    });

  });

};
