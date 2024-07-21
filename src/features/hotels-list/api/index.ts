import { backGetRoomsList } from "@/mockedBack/requests";
import type { IHotelSearchFilter } from "@/types/IHotelSearchFilter";

export const findAll = async (searchFilters: IHotelSearchFilter) => {
  try {
    return await backGetRoomsList(searchFilters);
  } catch(e) {
    console.error(e);
    return [];
  }
}