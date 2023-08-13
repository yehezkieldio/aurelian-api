import { IsBoolean, IsNumber } from "class-validator";

export class CreateRoomRequestDTO {
    @IsNumber()
    readonly id: number;

    @IsNumber()
    readonly number: number;

    @IsBoolean()
    readonly availability: boolean;
}
