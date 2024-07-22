import { findAll, insertFavoriteById, removeFavoriteById } from "@/mockedBack/requests/favorites"
import type { IHotelCardPreview } from "@/types/IHotelComponents";
import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";

export const saveFavoriteById = async (hotel: IHotelCardPreview) => {
  try {
    await insertFavoriteById(hotel.id);
  } catch(e) {
    console.error(e);
  }
};

export const unsaveFavoriteById = async (hotel: IHotelCardPreview) => {
  try {
    await removeFavoriteById(hotel.id);
  } catch(e) {
    console.error(e);
  }
};

export const findAllHandler = async (searchFilters: IHotelSearchFilter) => {
  try {
    return await findAll(searchFilters);
  } catch(e) {
    console.error(e);
    return [];
  }
};