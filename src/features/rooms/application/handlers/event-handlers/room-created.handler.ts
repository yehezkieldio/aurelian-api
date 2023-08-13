import {
    INTEGRATION_EVENT_PUBLISHER,
    IntegrationEventPublisher,
    RoomCreated,
    Topic,
} from "@/core/kafka/domain/publishers/integration-event.publisher";
import { RoomCreatedEvent } from "@/features/rooms/domain/events/room-created.event";

import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";

@EventsHandler(RoomCreatedEvent)
export class RoomCreatedHandler implements IEventHandler<RoomCreatedEvent> {
    @Inject(INTEGRATION_EVENT_PUBLISHER) private readonly integrationEventPublisher: IntegrationEventPublisher;

    public async handle(event: RoomCreatedEvent): Promise<void> {
        console.log("RoomCreatedHandler.handle event", event);

        await this.integrationEventPublisher.publish(Topic.ROOM_CREATED, new RoomCreated(event.id, event.number));
    }
}
