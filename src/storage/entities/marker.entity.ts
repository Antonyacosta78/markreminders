import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { MarkerType } from "../../core/marker.dto";

@Entity("markers")
export class Marker {
  @PrimaryGeneratedColumn({ name: "id" })
  id: number;

  @Column({ name: "update_at" })
  updatedAt: Date;

  @Column({ name: "created_at" })
  createdAt: Date;

  @Column({ name: "deleted_at", nullable: true })
  deletedAt?: Date;

  @Column({ name: "remind_at" })
  remindAt: Date;

  @Column({ name: "comment" })
  comment: string;

  @Column({ name: "type", type: "varchar" })
  type: MarkerType;

  @Column({ type: "simple-json" })
  tags: string[];

}
