import { Module, Provider } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { RoomController } from "./interfaces/rooms.controller";
import { FindRoomsHandler } from "./application/handlers/query-handlers/find-rooms.handler";
import { CreateRoomHandler } from "./application/handlers/command-handlers/create-room.command";
import { InjectionToken } from "./application/injection-token";
import { RoomsQueryImplement } from "./infrastructure/queries/rooms-query.implement";
import { RoomsRepositoryImplement } from "./infrastructure/repositories/rooms-repository.implement";

const infrastructure: Provider[] = [
    {
        provide: InjectionToken.ROOMS_QUERY,
        useClass: RoomsQueryImplement,
    },
    {
        provide: InjectionToken.ROOMS_REPOSITORY,
        useClass: RoomsRepositoryImplement,
    },
];
const application = [FindRoomsHandler, CreateRoomHandler];

@Module({
    imports: [CqrsModule],
    controllers: [RoomController],
    providers: [...infrastructure, ...application],
})
export class RoomsModule {}
