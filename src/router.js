import { createRouter, createWebHistory } from 'vue-router';

import App from './App';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: App,
    },
    {
      path: '/coaches',
      component: null
    },
    {
      path: '/coaches/:id',
      component: null,
      children: [
        {
          path: 'contact',
          component: null
        }
      ]
    },
    {
      path: '/register',
      component: null
    },
    {
      path: '/requests',
      component: null,
    },
    {
      path: '/:notFound(.*)',
      component: null,
    }
  ]
});

export default router;
