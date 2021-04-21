import Vue from 'vue';
import VueRouter, { RouteConfig, Route } from 'vue-router';
import { beforeGuard, afterGuard } from './guards';

// Route-level code-splitting using lazy-loaded components
// Using components as functions that import the actual component code when called
// Reduces initial load time for the website by loading pages as-needed
// Code is sent to the browser in named webpack chunks (example: home.[hash].js)
const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue");
const Sponsors = () =>
  import(/* webpackChunkName: "Sponsors" */ "../views/Sponsors.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const HallofFame = () =>
  import(/* webpackChunkName: "HallofFame" */ "../views/HallofFame.vue");
const Blogs = () =>
  import(/* webpackChunkName: "Blogs" */ "../views/Blogs.vue");
const Error = () =>
  import(/* webpackChunkName: "error" */ "../views/Error.vue");

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
    path: '/sponsor',
    name: 'Sponsor',
    component: Sponsor,
  },
  {
    path: '/error',
    name: 'Error',
    component: Error,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: "/sponsors",
    name: "Sponsors",
    component: Sponsors
  },
  {
    path: "/HallofFame",
    name: "HallofFame",
    component: HallofFame
  },
  {
    path: "/Blogs",
    name: "Blogs",
    component: Blogs
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
  mode: 'history',
  routes,
});

router.beforeEach(beforeGuard);

router.afterEach(afterGuard);

export default router;
