import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";
import { computed, type ComputedRef } from "vue";
import { useRoute } from "vue-router";

export const searchFiltersQueryComp = () => {
  const route = useRoute();
  const currentRouteQuery: ComputedRef<any> = computed(() => {
    const queryRoute = route?.query || {};

    return {
      location: queryRoute.location ?? undefined,
      checkIn: queryRoute.checkIn?? undefined,
      checkOut: queryRoute.checkOut?? undefined,
      guests: queryRoute.guests?? undefined,
    };
  });
  
  return currentRouteQuery;
}