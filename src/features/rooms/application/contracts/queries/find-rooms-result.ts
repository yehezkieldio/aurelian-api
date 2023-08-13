import { IQueryResult } from "@nestjs/cqrs";

export class FindRoomsResult implements IQueryResult {
    constructor(
        readonly rooms: Readonly<{
            id: number;
            number: number;
            avalability: boolean;
        }>[]
    ) {}
}
