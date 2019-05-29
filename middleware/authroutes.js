export default ({ store, redirect, route }) => {
  store.state.account.user !== null && route.name === 'login' ? redirect('/') : '';
  store.state.account.user === null && isProtectedRoute(route) ? redirect('/login') : '';
};

// Function to protect a route, can replace '/protected' with whatever
// - '/protected' has to be existing page
function isProtectedRoute(route) {
  if (route.matched.some(record => record.path == '/protected')) {
    return true;
  }
}
