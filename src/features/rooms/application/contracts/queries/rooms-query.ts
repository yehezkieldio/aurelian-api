import { FindRoomsResult } from "./find-rooms-result";
import { FindRoomsQuery } from "./find-rooms.query";

export interface RoomsQuery {
    find: (query: FindRoomsQuery) => Promise<FindRoomsResult>;
}
