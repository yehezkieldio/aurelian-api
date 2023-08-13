import { IEvent } from "@nestjs/cqrs";

export class RoomCreatedEvent implements IEvent {
    constructor(
        readonly id: string,
        readonly number: number
    ) {}
}
