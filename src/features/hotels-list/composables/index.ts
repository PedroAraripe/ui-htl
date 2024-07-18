import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";
import { computed, type ComputedRef } from "vue";
import { useRoute } from "vue-router";

export const searchFiltersQueryComp = () => {
  const route = useRoute();
  const currentRouteQuery: ComputedRef<IHotelSearchFilter> = computed(() => route?.query || {});
  
  return currentRouteQuery;
}