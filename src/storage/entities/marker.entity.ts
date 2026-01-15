import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MarkerType } from "../../core/marker.dto";

@Entity("markers")
export class Marker {
  @PrimaryGeneratedColumn({ name: "id", type: "integer" })
  id: number;

  @Column({
    name: "created_at",
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column({
    name: "update_at",
    type: "datetime",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  @Column({
    name: "deleted_at",
    type: "datetime",
    nullable: true,
  })
  deletedAt?: Date;

  @Column({
    name: "remind_at",
    type: "datetime",
  })
  remindAt: Date;

  @Column({
    name: "comment",
    type: "text", // Use "text" for longer strings in SQLite
  })
  comment: string;

  @Column({
    name: "type",
    type: "varchar",
  })
  type: MarkerType;

  @Column({
    name: "tags",
    type: "simple-json",
    nullable: true,
  })
  tags?: string[];
}
