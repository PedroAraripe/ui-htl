import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { backGetRoomsList } from '@/mockedBack/requests';
import { searchFiltersQueryComp } from '@/composables/routeQueries';
import type { IHotelCardPreview } from '@/types/HotelCard';

export const useHotelsListStore = defineStore('hotelList', () => {
  const hotelList: Ref<IHotelCardPreview[]> = ref([]);

  const searchFilters = searchFiltersQueryComp();

  async function findBySearchFilters() {
    try {
      hotelList.value = await backGetRoomsList(searchFilters.value);
    } catch {
      console.error("Ocorreu um erro ao solictar listagem de hotéis");
    }
  }

  return { hotelList, findBySearchFilters, searchFilters }
})
