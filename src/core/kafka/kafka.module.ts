import { Config } from "@/config";
import { Partitioners } from "kafkajs";

import { Global, Module } from "@nestjs/common";
import { ClientsModule, Transport } from "@nestjs/microservices";

import {
    INTEGRATION_EVENT_PUBLISHER,
    IntegrationEventPublisherImplement,
} from "./domain/publishers/integration-event.publisher";
import { KafkaNotificationMessagePublisher } from "./domain/publishers/kafka-notification.publisher";

@Global()
@Module({
    imports: [
        ClientsModule.register([
            {
                name: "KAFKA_CLIENT",
                transport: Transport.KAFKA,
                options: {
                    client: {
                        clientId: Config.KAFKA_CLIENT_ID,
                        brokers: Config.KAFKA_BROKERS,
                        ssl: false,
                    },
                    consumer: {
                        groupId: Config.KAFKA_CONSUMER_GROUP_ID,
                    },
                    producer: {
                        allowAutoTopicCreation: true,
                        createPartitioner: Partitioners.LegacyPartitioner,
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
