import { Module } from "@nestjs/common";

import { DatabaseModule } from "./core/database/database.module";
import { KafkaModule } from "./core/kafka/kafka.module";
import { RoomsModule } from "./features/rooms/rooms.module";

@Module({
    imports: [RoomsModule, DatabaseModule, KafkaModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
