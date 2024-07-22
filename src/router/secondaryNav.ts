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
    path: '/favorites',
    component: () => import('@/pages/Favorites.vue'),
    name: "favorites",
    meta: {
      icon: "",
      title: "Favoritos",
    }
  },
];