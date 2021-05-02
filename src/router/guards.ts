import { Route } from 'vue-router';
import store from '../store';

const externalRouteNames = [
  "Blog",
];

// Async function called before every route load
export async function beforeGuard(to: Route, _from: Route, next: Function) {
  // Do not trigger loading icon on internal routes
  if (to.name && externalRouteNames.indexOf(to.name) !== -1) {
    // Set page as currently loading
    store.commit('updateLoading', true);
  }

  // Execute next middleware
  next();
}

// Function called after each route load
export async function afterGuard() {
  // Set page as no long loading
  store.commit('updateLoading', false);
}
