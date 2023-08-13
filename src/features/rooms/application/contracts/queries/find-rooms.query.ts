import { IQuery } from "@nestjs/cqrs";

export class FindRoomsQuery implements IQuery {
    readonly skip: number;
    readonly take: number;

    constructor(options: FindRoomsQuery) {
        Object.assign(this, options);
    }
}
