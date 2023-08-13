import { Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import {
    INTEGRATION_EVENT_PUBLISHER,
    IntegrationEventPublisherImplement,
} from "./domain/publishers/integration-event.publisher";
import { KafkaNotificationMessagePublisher } from "./domain/publishers/kafka-notification.publisher";

@Module({
    imports: [
        ClientsModule.register([
            {
                name: "KAFKA_CLIENT",
                transport: Transport.KAFKA,
                options: {
                    client: {
                        brokers: ["localhost:9092"],
                        ssl: false,
                    },
                    consumer: {
                        groupId: "aurealian-kafka-consumer",
                    },
                },
            },
        ]),
    ],
    controllers: [],
    providers: [
        KafkaNotificationMessagePublisher,
        {
            provide: INTEGRATION_EVENT_PUBLISHER,
            useClass: IntegrationEventPublisherImplement,
        },
    ],
    exports: [INTEGRATION_EVENT_PUBLISHER],
})
export class KafkaModule {}
