import type { IBasicRoutes } from "@/types/routes";

export const secondaryNav : IBasicRoutes[] = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'),
    name: "home",
    meta: {
      icon: "",
      title: "Explorar",
    }
  },
  {
    path: '/about',
    component: () => import('@/views/AboutView.vue'),
    name: "about",
    meta: {
      icon: "",
      title: "Favoritos",
    }
  },
];