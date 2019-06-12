import { fireAuth } from '@/plugins/firebase.js';


export default (context) => {

  console.log('Middleware: auth-action fired');

  const { query, store } = context;

  // Get the action to complete.
  const mode = query.mode || '';
  // Get the one-time code from the query parameter.
  const actionCode = query.oobCode || '';
  // (Optional) Get the continue URL from the query parameter if available.
  const continueUrl = query.continueUrl || '';
  // (Optional) Get the language code if available.
  const lang = query.lang || 'en';

  // Handle the user management action.
  switch (mode) {
    case 'verifyEmail':
      // Verify user email action here
      // handleVerifyEmail( fireAuth, actionCode, continueUrl );
      fireAuth.applyActionCode(actionCode).then( response => {
        console.log('Successfully verified email');
        console.log(response);
        console.log('continueUrl: ' + continueUrl);
        // Clear global alerts
        store.commit('alerts/MU_ClearGlobalAlerts');

        // TODO: redirect home

      }).catch( error => {
        console.log(error);
        // Code is invalid or expired. Ask the user to verify their email address
        // again.
      });
      break;
    case 'resetPassword':
      // Reset user password action here
      // handleResetPassword( fireAuth, actionCode, continueUrl );
      break;
    case 'recoverEmail':
      // Recover user email action here
      // handleRecoverEmail( fireAuth, actionCode, continueUrl );
      break;
    default:
      // default action
  }

};

// function handleVerifyEmail(auth, actionCode) {
//   console.log('handleVerifyEmail function ran here!');
//   // Try to apply the email verification code.
//   fireAuth.applyActionCode(actionCode).then( response => {
//     console.log('Successfully verified email');
//     // TODO: clear verify email alert
//     // TODO: redirect home
//   }).catch( error => {
//     console.log(error);
//     // Code is invalid or expired. Ask the user to verify their email address
//     // again.
//   });
// }
