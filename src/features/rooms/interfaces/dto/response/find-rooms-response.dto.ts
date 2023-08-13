import { FindRoomsResult } from "@/features/rooms/application/contracts/queries/find-rooms-result";

class Rooms {
    readonly id: string;
    readonly number: number;
    readonly availability: boolean;
}

export class FindRoomsResponseDTO extends FindRoomsResult {
    readonly rooms: Rooms[];
}
