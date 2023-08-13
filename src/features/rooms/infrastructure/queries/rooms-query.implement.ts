import { readConnection } from "@/core/database/domain/services/database.service";
import { ENTITY_ID_TRANSFORMER, EntityIdTransformer } from "@/core/database/domain/transformers/entity-id.transformer";

import { Inject, Injectable } from "@nestjs/common";

import { FindRoomsResult } from "../../application/contracts/queries/find-rooms-result";
import { FindRoomsQuery } from "../../application/contracts/queries/find-rooms.query";
import { RoomsQuery } from "../../application/contracts/queries/rooms-query";
import { RoomEntity } from "../entities/room.entity";

@Injectable()
export class RoomsQueryImplement implements RoomsQuery {
    @Inject(ENTITY_ID_TRANSFORMER) private readonly entityIdTransformer: EntityIdTransformer;

    public async find(query: FindRoomsQuery): Promise<FindRoomsResult> {
        return readConnection
            .getRepository(RoomEntity)
            .find({
                skip: query.skip,
                take: query.skip,
            })
            .then((entities) => ({
                rooms: entities.map((entity) => ({
                    id: this.entityIdTransformer.from(entity.id),
                    number: entity.number,
                    availability: entity.availability,
                })),
            }));
    }
}
