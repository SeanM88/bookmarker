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
          photoURL: user.photoURL,
          isVerified: false
        };

        if (user.emailVerified || user.providerData === 'google.com') {
          activeUser.isVerified = true;
          store.commit('alerts/MU_ClearGlobalAlerts');
        } else {
          const alert = {
            type: 'info',
            message: `Almost done! Use the link in the email sent to ${activeUser.email} to complete sign up!`,
            code: 'auth-verifyPending'
          };
          store.commit('alerts/MU_GlobalAlert', alert);
        }

        return resolve(store.commit('account/MU_SetActiveUser', activeUser));

      }

      // If there's no user we do nothing
      console.log('There is no user in onAuthStateChanged!');
      return resolve();

    });

  });

};
