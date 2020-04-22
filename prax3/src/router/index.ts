import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Index from '../views/Index.vue'
import Broneeri from '../views/Broneeri.vue'
import Remont from '../views/Remont.vue'
import Hooldus from '../views/Hooldus.vue'
import Edukas from '../views/Edukas.vue'

Vue.use(VueRouter);

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/broneeri',
    name: 'Broneeri',
    component: Broneeri
  },
  {
    path: '/remont',
    name: 'Remont',
    component: Remont
  },
  {
    path: '/hooldus',
    name: 'Hooldus',
    component: Hooldus
  },
  {
    path: '/edukas',
    name: 'Edukas',
    component: Edukas
  }
];

const router = new VueRouter({
  routes
});

export default router
