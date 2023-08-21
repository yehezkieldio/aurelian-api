import { RoomFactory } from "@/features/rooms/domain/factories/room.factory";
import { RoomRepository } from "@/features/rooms/domain/repositories/room.repository";

import { Inject } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

import { UpdateRoomCommand } from "../../contracts/commands/update-room.command";
import { InjectionToken } from "../../injection-token";

@CommandHandler(UpdateRoomCommand)
export class UpdateRoomHandler implements ICommandHandler<UpdateRoomCommand, void> {
    @Inject(InjectionToken.ROOMS_REPOSITORY) private readonly roomsRepository: RoomRepository;
    @Inject() private readonly roomFactory: RoomFactory;

    public async execute(command: UpdateRoomCommand): Promise<void> {
        console.log(command);
    }
}
