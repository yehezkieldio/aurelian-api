import { RoomCreatedEvent } from "@/features/rooms/domain/events/room-created.event";
import { RoomRepository } from "@/features/rooms/domain/repositories/room.repository";

import { Inject } from "@nestjs/common";
import { CommandHandler, EventBus, ICommandHandler } from "@nestjs/cqrs";

import { CreateRoomCommand } from "../../contracts/commands/create-room.command";
import { InjectionToken } from "../../injection-token";

@CommandHandler(CreateRoomCommand)
export class CreateRoomHandler implements ICommandHandler<CreateRoomCommand, void> {
    @Inject(InjectionToken.ROOMS_REPOSITORY) private readonly roomsRepository: RoomRepository;
    constructor(readonly eventBus: EventBus) {}

    public async execute(command: CreateRoomCommand): Promise<void> {
        console.log("CreateRoomHandler.execute command", command);

        this.eventBus.publish(new RoomCreatedEvent(command.id, command.number));
    }
}
