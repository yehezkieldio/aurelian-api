import { Column, Entity, PrimaryColumn } from "typeorm";

import { BaseEntity } from "./base.entity";

@Entity()
export class RoomEntity extends BaseEntity {
    @PrimaryColumn({ type: "uuid" })
    id: string;

    @Column({ type: "integer" })
    number: number;

    @Column({ type: "boolean" })
    availability: boolean;
}
