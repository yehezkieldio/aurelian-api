import { Inject } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { FindRoomsResult } from "../../contracts/queries/find-rooms-result";
import { FindRoomsQuery } from "../../contracts/queries/find-rooms.query";
import { RoomsQuery } from "../../contracts/queries/rooms-query";
import { InjectionToken } from "../../injection-token";

@QueryHandler(FindRoomsQuery)
export class FindRoomsHandler implements IQueryHandler<FindRoomsQuery, FindRoomsResult> {
    @Inject(InjectionToken.ROOMS_QUERY) readonly roomsQuery: RoomsQuery;

    public async execute(query: FindRoomsQuery): Promise<FindRoomsResult> {
        return this.roomsQuery.find(query);
    }
}
