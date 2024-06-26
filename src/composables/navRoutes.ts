import type { IBasicRoutes } from "@/types/routes";
import { type ComputedRef } from "vue";
import {useRoute} from 'vue-router'
import {computed} from 'vue'
import { secondaryNav } from "@/router/secondaryNav";

const route = useRoute();

const currentRouteName = computed(() => {
  console.log("rota", route?.name)

  return route?.name;
});

export const secondaryRoutes : ComputedRef<IBasicRoutes[]> = computed(
  () => secondaryNav.map((r: IBasicRoutes) => ({
    ...r,
    isCurrent: r.name === currentRouteName.value
  })));