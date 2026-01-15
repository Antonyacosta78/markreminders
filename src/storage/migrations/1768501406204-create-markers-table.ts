import { Table, type MigrationInterface, type QueryRunner } from "typeorm";

export class CreateMarkersTable1768501406204 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "markers",
        columns: [
          {
            name: "id",
            type: "integer",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "created_at",
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
          },
          {
            name: "updated_at",
            type: "datetime",
            default: "CURRENT_TIMESTAMP",
          },
          { name: "deleted_at", type: "datetime", isNullable: true },
          {
            name: "remind_at",
            type: "datetime",
          },
          {
            name: "comment",
            type: "text",
          },
          {
            name: "tags",
            type: "text", // Use 'text' for simple-json
            isNullable: true,
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("markers");
  }
}
