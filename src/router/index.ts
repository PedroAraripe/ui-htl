import { createRouter, createWebHashHistory } from 'vue-router';
import { secondaryNav } from './secondaryNav';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...secondaryNav,
  ]
})

export default router
