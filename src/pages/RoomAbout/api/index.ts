import { backGetRoomById } from "@/mockedBack/requests";

export const findById = (id: number) => backGetRoomById(id);