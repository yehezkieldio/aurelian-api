import { Module } from "@nestjs/common";

import { KafkaModule } from "./core/kafka/kafka.module";
import { RoomsModule } from "./features/rooms/rooms.module";

@Module({
    imports: [RoomsModule, KafkaModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
