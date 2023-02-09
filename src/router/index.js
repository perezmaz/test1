import Vue from 'vue';
import VueRouter from 'vue-router';

import ExampleForm from '../views/ExampleForm';
import MainPage from '../views/MainPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: {
      name: 'dashboard',
    },
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: MainPage,
    meta: {
      title: 'Dashbarod'
    },
  },
  {
    path: '/form/:name?',
    name: 'form',
    component: ExampleForm,
    meta: {
      title: 'Form'
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  base: '/test1'
});

export default router;
