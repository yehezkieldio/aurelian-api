import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { FindRoomsQuery } from "../../contracts/queries/find-rooms.query";
import { FindRoomsResult } from "../../contracts/queries/find-rooms-result";
import { InjectionToken } from "../../injection-token";
import { RoomsQuery } from "../../contracts/queries/rooms-query";

@QueryHandler(FindRoomsQuery)
export class FindRoomsHandler implements IQueryHandler<FindRoomsQuery, FindRoomsResult> {
    @Inject(InjectionToken.ROOMS_QUERY) readonly roomsQuery: RoomsQuery;

    public async execute(query: FindRoomsQuery): Promise<FindRoomsResult> {
        console.log("FindRoomsHandler.execute query", query);

        const rooms = {
            rooms: [
                {
                    id: 1,
                    number: 1,
                    avalability: true,
                },
            ],
        };

        return rooms;
    }
}
