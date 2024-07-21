import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IHotelCardPreview } from '@/types/IHotelComponents';

export const useCounterStore = defineStore('favorites', () => {
  const favorites: Ref<IHotelCardPreview[]> = ref([]);

  function addFavorite(hotel: IHotelCardPreview) {
    favorites.value.push(hotel);
  }

  function removeFavorite(hotel: IHotelCardPreview) {
    favorites.value = favorites.value.filter((h: IHotelCardPreview) => h.id != hotel.id)
  }

  return { favorites, addFavorite, removeFavorite }
})
