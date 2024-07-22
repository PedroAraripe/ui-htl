import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { searchFiltersQueryComp } from '@/composables/routeQueries';
import type { IHotelCardPreview } from '@/types/IHotelComponents';
import { findAllHandler } from '../api';

export const useHotelsListStore = defineStore('hotelList', () => {
  const list: Ref<IHotelCardPreview[]> = ref([]);

  const searchFilters = searchFiltersQueryComp();

  async function findBySearchFilters() {
    try {
      list.value = await findAllHandler(searchFilters.value);
    } catch {
      console.error("Ocorreu um erro ao solictar listagem de hotéis");
    }
  }

  return { list, findBySearchFilters, searchFilters }
})
