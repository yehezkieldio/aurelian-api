import { IEvent } from "@nestjs/cqrs";

export class RoomCreatedEvent implements IEvent {
    constructor(
        readonly id: number,
        readonly number: number
    ) {}
}
