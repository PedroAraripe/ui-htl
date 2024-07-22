import { findAll } from "@/mockedBack/requests/hotels";
import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";

export const findAllHandler = async (searchFilters: IHotelSearchFilter) => {
  try {
    return await findAll(searchFilters);
  } catch(e) {
    console.error(e);
    return [];
  }
};