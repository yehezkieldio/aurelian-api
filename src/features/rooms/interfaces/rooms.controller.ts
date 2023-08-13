import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";

import { CreateRoomCommand } from "../application/contracts/commands/create-room.command";
import { FindRoomsQuery } from "../application/contracts/queries/find-rooms.query";
import { CreateRoomRequestDTO } from "./dto/requests/create-room-request.dto";
import { FindRoomsRequestQueryString } from "./dto/requests/find-rooms-request";
import { FindRoomsResponseDTO } from "./dto/response/find-rooms-response.dto";

@Controller("rooms")
export class RoomController {
    constructor(
        readonly commandBus: CommandBus,
        readonly queryBus: QueryBus
    ) {}

    @Post()
    public async createRoom(@Body() body: CreateRoomRequestDTO): Promise<void> {
        const command = new CreateRoomCommand(body.id, body.number, body.availability);

        return await this.commandBus.execute(command);
    }

    @Get()
    public async findRooms(@Query() queryString: FindRoomsRequestQueryString): Promise<FindRoomsResponseDTO> {
        const query = new FindRoomsQuery(queryString);

        return await this.queryBus.execute(query);
    }
}
