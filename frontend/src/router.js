import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/login.vue';
import SignUp from './views/signup.vue';
import User from './views/user.vue';
import NotFound from './views/404.vue';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'*',
      redirect:'/404'
    },
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
    {
      path: '/404',
      name: 'notfound',
      component: NotFound,
    },
  ],
});
