/* eslint-disable @typescript-eslint/naming-convention */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export function up(pgm: MigrationBuilder): void {
  pgm.createTable('brc20_counts_by_tokens', {
    token_type: {
      type: 'text',
      notNull: true,
      primaryKey: true,
    },
    count: {
      type: 'bigint',
      notNull: true,
      default: 1,
    },
  });
}
