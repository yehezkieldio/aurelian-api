import { IQueryResult } from "@nestjs/cqrs";

export class FindRoomsResult implements IQueryResult {
    constructor(
        readonly rooms: Readonly<{
            id: string;
            number: number;
            availability: boolean;
        }>[]
    ) {}
}
