import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLesson1622985681361 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: 'lesson',
        columns: [
          {
            name: 'idAula',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()'
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'created_At',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_At',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('lesson')
  }

}
