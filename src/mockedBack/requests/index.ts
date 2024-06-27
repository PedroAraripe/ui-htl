import { mockedHotels } from "../data/mockedHotels";

export const backGetRoomsList = async () => mockedHotels;
export const backGetRoomById = async (id: number) => mockedHotels.find(hotel => hotel.id === id);