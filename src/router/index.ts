import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import { beforeGuard, afterGuard } from './guards';

// Route-level code-splitting using lazy-loaded components
// Using components as functions that import the actual component code when called
// Reduces initial load time for the website by loading pages as-needed
// Code is sent to the browser in named webpack chunks (example: home.[hash].js)
const Home = () => import(/* webpackChunkName: "home" */ '../views/Home.vue');
const Sponsors = () => import(/* webpackChunkName: "sponsors" */ '../views/Sponsors.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue');
const Hall = () => import(/* webpackChunkName: "hall" */ '../views/Hall.vue');
const Error = () => import(/* webpackChunkName: "error" */ '../views/Error.vue');

// Apply a VueRouter to our Vue instance
Vue.use(VueRouter);

// Define the different pages of our application
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/sponsors',
    name: 'Sponsors',
    component: Sponsors,
  },
  {
    path: '/hall',
    name: 'Hall',
    component: Hall,
  },
  {
    path: '/Blog',
    name: 'Blog',
    beforeEnter: (_to: Route, _from: Route, next: Function) => {
      window.location.href = 'https://medium.com/siggame';
    },
  },
  // This route will match anything which isn't matched above
  {
    path: '*',
    name: 'NotFound',
    component: Error,
  },
];

// Create a router with the defined routes
const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach(beforeGuard);

router.afterEach(afterGuard);

export default router;
