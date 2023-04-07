import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680908589554 implements MigrationInterface {
    name = 'default1680908589554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tasks" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "done" boolean NOT NULL, "status" text NOT NULL, CONSTRAINT "PK_8d12ff38fcc62aaba2cab748772" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tasks"`);
    }

}
