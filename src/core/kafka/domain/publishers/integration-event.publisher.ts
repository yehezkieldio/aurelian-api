import { Inject, Injectable } from "@nestjs/common";
import { IEvent } from "@nestjs/cqrs";

import { KafkaNotificationMessagePublisher } from "./kafka-notification.publisher";

export enum Topic {
    ROOM_CREATED = "RoomCreated",
}

export const INTEGRATION_EVENT_PUBLISHER = "IntegrationEventPublisher";

export class RoomCreated {
    constructor(
        readonly id: number,
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
        console.log(`Publishing event ${name} with body ${JSON.stringify(body)}`);

        await this.kafkaNotificationPublisher.publish(name, {
            name,
            body,
        });
    }
}
