import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";
import { computed, type ComputedRef } from "vue";
import { useRoute } from "vue-router";

export const searchFiltersQueryComp = () => {
  const route = useRoute();
  const currentRouteQuery: ComputedRef<any> = computed(() => {
    const queryRoute: IHotelSearchFilter = route?.query || {};
    const {
      location,
      checkIn,
      checkOut,
      guests,
      rooms,
      sortBy,
    } = queryRoute;

    return {
      location,
      checkIn,
      checkOut,
      guests,
      rooms,
      sortBy
    };
  });
  
  return currentRouteQuery;
}