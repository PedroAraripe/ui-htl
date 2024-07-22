import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";
import { mockedHotels } from "../data/mockedHotels";
import type { IHotelCardPreview } from "@/types/IHotelComponents";

export const findAll = async (searchFilters: IHotelSearchFilter) => mockedHotels.filter(c =>  {
  const currentLocationSearch = searchFilters.location || "";

  // The Regex below removes all empty spaces in string :) trust me
  const cleanedLocationSearching = currentLocationSearch?.replace(/ /g,'').trim().toLowerCase();
  const cleanedLocationLoop = c.location?.replace(/ /g,'').trim().toLowerCase();

  return currentLocationSearch ? cleanedLocationLoop === cleanedLocationSearching: true;
})
.filter(c => !searchFilters.sortBy || searchFilters.sortBy === "price" ? c.currentOpen : true )
.sort((a: IHotelCardPreview, b: IHotelCardPreview) => {
  if(searchFilters?.sortBy === "ratings") {
    return b.ratings - a.ratings;
  }

  return b.price.value - a.price.value;
});

export const findHotelById = async (id: number) => mockedHotels.find(hotel => hotel.id === id);