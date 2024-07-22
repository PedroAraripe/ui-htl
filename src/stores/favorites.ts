import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IHotelCardPreview } from '@/types/IHotelComponents';
import { findAllHandler } from '@/api/favorites';

export const useFavoritesStore = defineStore('favorites', () => {
  const list: Ref<IHotelCardPreview[]> = ref([]);

  function add(hotel: IHotelCardPreview) {
    list.value.push(hotel);
  }

  function remove(hotel: IHotelCardPreview) {
    list.value = list.value.filter((h: IHotelCardPreview) => h.id != hotel.id)
  }

  const findAll = async () => {
    try {
      list.value = await findAllHandler();
    } catch(e) {
      console.error(e);
    }
  }

  return { list, add, remove, findAll }
})
