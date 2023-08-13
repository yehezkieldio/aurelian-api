import { FindRoomsResult } from "@/features/rooms/application/contracts/queries/find-rooms-result";

class Rooms {
    readonly id: number;
    readonly number: number;
    readonly avalability: boolean;
}

export class FindRoomsResponseDTO extends FindRoomsResult {
    readonly rooms: Rooms[];
}