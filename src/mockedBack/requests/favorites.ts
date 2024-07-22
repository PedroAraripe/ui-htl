import type { IHotelCardPreview } from "@/types/IHotelComponents";
import { favorites } from "../data/favorites";
import { findHotelById } from "./hotels";
import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";

export const insertFavoriteById = async (id: number) => {
  try {
    const hotelFavorite = await findHotelById(id);
    const hotelInList = await findHotelById(id);
    
    if(hotelFavorite) {
      hotelFavorite.isFavorite = true;
      favorites.push(hotelFavorite);
    }
  } catch(e) {
    console.error(e);
  }
};

export const removeFavoriteById = async (id: number) => {
  try {
    const indexOfFavorite = favorites.findIndex(h => h.id === id);

    if(id > -1) {
      favorites[indexOfFavorite].isFavorite = false;
      favorites[indexOfFavorite] = favorites[favorites.length - 1];
      favorites.pop();
    }
  } catch(e) {
    console.error(e);
  }
};

export const findAll = (searchFilters: IHotelSearchFilter) => favorites
  .filter(c => !searchFilters.sortBy || searchFilters.sortBy === "price" ? c.currentOpen : true )
  .sort((a: IHotelCardPreview, b: IHotelCardPreview) => {
    if(searchFilters?.sortBy === "ratings") {
      return b.ratings - a.ratings;
    }

    return b.price.value - a.price.value;
  });