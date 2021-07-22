import { RouteRecordRaw } from 'vue-router';
import AboutVue from '../views/About.vue';
import HomeVue from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeVue,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutVue,
  },
];

export default routes;
