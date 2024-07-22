import { favorites } from "../data/favorites";
import { findHotelById } from "./hotels";

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

export const findAll = () => favorites;