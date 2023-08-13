import { Controller, Get, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { FindRoomsRequestQueryString } from "./dto/query-string/find-rooms-request";
import { FindRoomsQuery } from "../application/contracts/queries/find-rooms.query";
import { FindRoomsResponseDto } from "./dto/response/find-rooms-response.dto";

@Controller("rooms")
export class RoomController {
    constructor(
        readonly commandBus: CommandBus,
        readonly queryBus: QueryBus
    ) {}

    @Get()
    public async findRooms(@Query() queryString: FindRoomsRequestQueryString): Promise<FindRoomsResponseDto> {
        const query = new FindRoomsQuery(queryString);
        const queryBus = await this.queryBus.execute(query);

        return {
            rooms: queryBus.rooms,
        };
    }
}
