import { Inject, Injectable } from "@nestjs/common";
import { IEvent } from "@nestjs/cqrs";
import { ClientKafka } from "@nestjs/microservices";

import { Topic } from "./integration-event.publisher";

type Message = Readonly<{ name: string; body: IEvent; requestId?: string }>;

@Injectable()
export class KafkaNotificationMessagePublisher {
    @Inject("KAFKA_CLIENT") private readonly kafkaClient: ClientKafka;

    public async publish(Name: Topic, Message: Message): Promise<void> {
        console.log("KafkaClient emit", Name, Message);
        this.kafkaClient.emit(Name, Message);
    }
}
