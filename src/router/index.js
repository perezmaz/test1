import Vue from 'vue';
import VueRouter from 'vue-router';

import TestLink1 from '../components/TestLink1';
import TestLink2 from '../components/TestLink2';

Vue.use(VueRouter);

const routes = [
  {
    path: '/app1',
    name: 'Link1',
    component: TestLink1,
  },
  {
    path: '/app1/link2',
    name: 'Link2',
    component: TestLink2,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
