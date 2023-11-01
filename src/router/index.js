import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/reportCollection',
    name: 'reportCollection',
    // route level code-splitting
    // this generates a separate chunk for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ReportCollection.vue'),
  },
  {
    path: '/reportExpense',
    name: 'reportExpense',
    // route level code-splitting
    // this generates a separate chunk for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/ReportExpense.vue'),
  },
  {
    path: '/societySettings',
    name: 'societySettings',
    // route level code-splitting
    // this generates a separate chunk for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/SocietySettings.vue'),
  },
  {
    path: '/appSettings',
    name: 'appSettings',
    // route level code-splitting
    // this generates a separate chunk for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AppSettings.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
