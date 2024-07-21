import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { searchFiltersQueryComp } from '@/composables/routeQueries';
import type { IHotelCardPreview } from '@/types/IHotelComponents';
import { findAll } from '../api';

export const useHotelsListStore = defineStore('hotelList', () => {
  const hotelList: Ref<IHotelCardPreview[]> = ref([]);

  const searchFilters = searchFiltersQueryComp();

  async function findBySearchFilters() {
    try {
      hotelList.value = await findAll(searchFilters.value);
    } catch {
      console.error("Ocorreu um erro ao solictar listagem de hotéis");
    }
  }

  return { hotelList, findBySearchFilters, searchFilters }
})
