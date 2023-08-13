import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class RoomEntity extends BaseEntity {
    @PrimaryColumn({ type: "binary", length: 16 })
    id: Buffer;

    @Column({ type: "number" })
    number: number;

    @Column({ type: "boolean" })
    available: boolean;
}
