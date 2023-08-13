import { Inject, Injectable } from "@nestjs/common";
import { IEvent } from "@nestjs/cqrs";

import { KafkaNotificationMessagePublisher } from "./kafka-notification.publisher";

export enum Topic {
    ROOM_CREATED = "RoomCreated",
}

export const INTEGRATION_EVENT_PUBLISHER = "IntegrationEventPublisher";

export class RoomCreated {
    constructor(
        readonly id: string,
        readonly number: number
    ) {}
}

export interface IntegrationEventPublisher {
    publish: (name: Topic, body: IEvent) => Promise<void>;
}

@Injectable()
export class IntegrationEventPublisherImplement implements IntegrationEventPublisher {
    @Inject() private readonly kafkaNotificationPublisher: KafkaNotificationMessagePublisher;

    async publish(name: Topic, body: IEvent): Promise<void> {
        await this.kafkaNotificationPublisher.publish(name, {
            name,
            body,
        });
    }
}
