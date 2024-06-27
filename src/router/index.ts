import { createRouter, createWebHashHistory } from 'vue-router';
import { secondaryNav } from './secondaryNav';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...secondaryNav,
    {
      path: '/rooms/:id',
      component: () => import('@/pages/RoomAbout/components/Index.vue'),
      name: "rooms",
      meta: {
        icon: "",
        title: "",
      }
    },
  ]
})

export default router
