export default ({ store, redirect, route }) => {
  // If verified user logged in, redirect away from login/signup pages
  if (store.state.account.isVerified) {
    route.name === 'account-signup' ? redirect('/') : '';
    route.name === 'account-login' ? redirect('/') : '';
  }
};

// Function to protect a route, can replace '/protected' with whatever
// - '/protected' has to be existing page
// function isProtectedRoute(route) {
//   if (route.matched.some(record => record.path == '/protected')) {
//     return true;
//   }
// }
