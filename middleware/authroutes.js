export default ({ store, redirect, route }) => {
  if (store.state.account.isAuthenticated) {
    route.name === 'account-signup' ? redirect('/') : '';
    route.name === 'account-login' ? redirect('/') : '';
  } else {
    isProtectedRoute(route) ? redirect('/login') : '';
  }
};

// Function to protect a route, can replace '/protected' with whatever
// - '/protected' has to be existing page
function isProtectedRoute(route) {
  if (route.matched.some(record => record.path == '/protected')) {
    return true;
  }
}
