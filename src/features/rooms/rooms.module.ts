import { Module, Provider } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { FindRoomsHandler } from "./application/handlers/query-handlers/find-rooms.handler";
import { RoomController } from "./interface/rooms.controller";
import { InjectionToken } from "./application/injection-token";
import { RoomsQueryImplement } from "./infrastructure/query/rooms-query.implement";

const infrastructure: Provider[] = [
    {
        provide: InjectionToken.ROOMS_QUERY,
        useClass: RoomsQueryImplement,
    },
];
const application = [FindRoomsHandler];

@Module({
    imports: [CqrsModule],
    controllers: [RoomController],
    providers: [...infrastructure, ...application],
})
export class RoomsModule {}
