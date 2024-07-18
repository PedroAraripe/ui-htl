import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";
import { mockedHotels } from "../data/mockedHotels";

export const backGetRoomsList = async (searchFilters: IHotelSearchFilter) => mockedHotels.filter(c =>  {
  const currentLocationSearch = searchFilters.location || "";

  // The Regex below removes all empty spaces in string :) trust me
  const cleanedLocationSearching = currentLocationSearch?.replace(/ /g,'').trim().toLowerCase();
  const cleanedLocationLoop = c.location?.replace(/ /g,'').trim().toLowerCase();

  return currentLocationSearch ? cleanedLocationLoop === cleanedLocationSearching: true;
});

export const backGetRoomById = async (id: number) => mockedHotels.find(hotel => hotel.id === id);