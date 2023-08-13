export const ENTITY_ID_TRANSFORMER = "EntityIdTransformer";

export interface EntityIdTransformer {
    from: (dbData: string) => string;
    to: (stringId: string) => string;
}
