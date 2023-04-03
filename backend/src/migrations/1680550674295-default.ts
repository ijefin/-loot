import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680550674295 implements MigrationInterface {
  name = "default1680550674295";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tasks" ALTER COLUMN "done" SET NOT NULL`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "tasks" ALTER COLUMN "done" DROP NOT NULL`
    );
  }
}
