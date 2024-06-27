import { backGetRoomsList } from "@/mockedBack/requests";

export const getHotelsList = async () => {
  try {
    return await backGetRoomsList();
  } catch(e) {
    console.error(e);
    return [];
  }
}