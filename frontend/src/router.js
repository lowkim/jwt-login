import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue';
import SignUp from './views/signup.vue';
import User from './views/user.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});
