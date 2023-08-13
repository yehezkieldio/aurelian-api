import { AggregateRoot } from "@nestjs/cqrs";

import { RoomCreatedEvent } from "../events/room-created.event";

export type RoomEssentialProperties = Readonly<
    Required<{
        id: string;
        number: number;
        availability: boolean;
    }>
>;

export type RoomOptionalProperties = Readonly<
    Partial<{
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>
>;

export type RoomProperties = RoomEssentialProperties & Required<RoomOptionalProperties>;

export interface Room {
    create: () => void;
    commit: () => void;
}

export class RoomImplement extends AggregateRoot implements Room {
    private readonly id: string;
    private readonly number: number;
    readonly availability: boolean;
    private readonly createdAt: Date;
    private updatedAt: Date;
    private deletedAt: Date | null;

    constructor(properties: RoomProperties) {
        super();

        Object.assign(this, properties);
    }

    create(): void {
        this.apply(new RoomCreatedEvent(this.id, this.number));
    }
}
