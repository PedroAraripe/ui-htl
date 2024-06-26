import type { IBasicRoutes } from "@/types/routes";
import { type ComputedRef } from "vue";
import {useRoute} from 'vue-router'
import {computed} from 'vue'
import { secondaryNav } from "@/router/secondaryNav";

export const getSecondaryRoutes : () => ComputedRef<IBasicRoutes[]> = () => {
  const route = useRoute();
  const currentRouteName = route?.name;
  
  return computed(
    () => secondaryNav.map((r: IBasicRoutes) => ({
      ...r,
      isCurrent: r.name === currentRouteName
    })))
};