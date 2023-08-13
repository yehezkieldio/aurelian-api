import { Module } from "@nestjs/common";

import { DatabaseService } from "./domain/services/database.service";
import { ENTITY_ID_TRANSFORMER } from "./domain/transformers/entity-id.transformer";
import { EntityIdTransformerImplement } from "./infrastructure/transformers/entity-id-transformer.implement";

@Module({
    providers: [
        DatabaseService,
        {
            provide: ENTITY_ID_TRANSFORMER,
            useClass: EntityIdTransformerImplement,
        },
    ],
    exports: [ENTITY_ID_TRANSFORMER],
})
export class DatabaseModule {}
