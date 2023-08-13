import { writeConnection } from "@/core/database/domain/services/database.service";
import { ENTITY_ID_TRANSFORMER, EntityIdTransformer } from "@/core/database/domain/transformers/entity-id.transformer";
import { EntityId } from "@/core/database/infrastructure/entities/entity-id.entity";

import { Inject } from "@nestjs/common";

import { RoomFactory } from "../../domain/factories/room.factory";
import { Room, RoomProperties } from "../../domain/models/room.model";
import { RoomRepository } from "../../domain/repositories/room.repository";
import { RoomEntity } from "../entities/room.entity";

export class RoomsRepositoryImplement implements RoomRepository {
    @Inject() private readonly roomFactory: RoomFactory;
    @Inject(ENTITY_ID_TRANSFORMER) private readonly entityIdTransformer: EntityIdTransformer;

    public async newId(): Promise<string> {
        return new EntityId().toString();
    }

    public async save(data: Room | Room[]): Promise<void> {
        const models = Array.isArray(data) ? data : [data];
        const entities = models.map((model) => this.modelToEntity(model));
        await writeConnection.manager.getRepository(RoomEntity).save(entities);
    }

    private modelToEntity(model: Room): RoomEntity {
        const properties = JSON.parse(JSON.stringify(model)) as RoomProperties;
        return {
            ...properties,
            id: this.entityIdTransformer.to(properties.id),
            createdAt: properties.createdAt,
            updateAt: properties.updatedAt,
            deletedAt: properties.deletedAt,
        };
    }

    private entityToModel(entity: RoomEntity): Room {
        return this.roomFactory.reconstitute({
            ...entity,
            id: this.entityIdTransformer.from(entity.id),
            availability: entity.availability,
            createdAt: entity.createdAt,
            updatedAt: entity.updateAt,
            deletedAt: entity.deletedAt,
        });
    }
}
