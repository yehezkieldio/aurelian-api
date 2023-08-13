import { KafkaModule } from "@/core/kafka/kafka.module";

import { Module, Provider } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import { CreateRoomHandler } from "./application/handlers/command-handlers/create-room.handler";
import { RoomCreatedHandler } from "./application/handlers/event-handlers/room-created.handler";
import { FindRoomsHandler } from "./application/handlers/query-handlers/find-rooms.handler";
import { InjectionToken } from "./application/injection-token";
import { RoomFactory } from "./domain/factories/room.factory";
import { RoomsQueryImplement } from "./infrastructure/queries/rooms-query.implement";
import { RoomsRepositoryImplement } from "./infrastructure/repositories/rooms-repository.implement";
import { RoomController } from "./interfaces/rooms.controller";

const infrastructure: Provider[] = [
    {
        provide: InjectionToken.ROOMS_REPOSITORY,
        useClass: RoomsRepositoryImplement,
    },
    {
        provide: InjectionToken.ROOMS_QUERY,
        useClass: RoomsQueryImplement,
    },
];
const application = [FindRoomsHandler, RoomCreatedHandler, CreateRoomHandler];
const domain = [RoomFactory];

@Module({
    imports: [CqrsModule, KafkaModule],
    controllers: [RoomController],
    providers: [...infrastructure, ...application, ...domain],
})
export class RoomsModule {}
