import type { IBasicRoutes } from "@/types/routes";

export const secondaryNav : IBasicRoutes[] = [
  {
    path: '/',
    component: () => import('@/pages/HomePage.vue'),
    name: "home",
    meta: {
      icon: "",
      title: "Explorar",
    }
  },
  {
    path: '/favorites',
    component: () => import('@/pages/FavoritesPage.vue'),
    name: "favorites",
    meta: {
      icon: "",
      title: "Favoritos",
    }
  },
];