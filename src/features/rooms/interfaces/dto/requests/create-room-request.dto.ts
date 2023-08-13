import { IsBoolean, IsNumber } from "class-validator";

export class CreateRoomRequestDTO {
    @IsNumber()
    readonly number: number;

    @IsBoolean()
    readonly availability: boolean;
}
