import { ICommand } from "@nestjs/cqrs";

export class CreateRoomCommand implements ICommand {
    constructor(
        readonly number: number,
        readonly availability: boolean
    ) {}
}
