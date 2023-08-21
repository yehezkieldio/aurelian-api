import { IsBoolean, IsNumber } from "class-validator";

export class UpdateRoomRequestDTO {
    @IsNumber()
    readonly number: number;

    @IsBoolean()
    readonly availability: boolean;
}
