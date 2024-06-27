import { backGetRoomById } from "@/mockedBack/requests";

export const getCurrentHotel = (id: number) => backGetRoomById(id);