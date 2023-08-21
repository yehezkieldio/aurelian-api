import { ICommand } from "@nestjs/cqrs";

export class UpdateRoomCommand implements ICommand {
    constructor(
        readonly number: number,
        readonly availability: boolean
    ) {}
}