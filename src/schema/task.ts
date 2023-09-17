import { sql } from 'drizzle-orm';
import { boolean, numeric, pgTable, text } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

export const taskTable = pgTable('Tasks', {
  id: text('id')
    .primaryKey()
    .notNull()
    .default(sql`gen_random_uuid()`),
  title: text('title').notNull(),
  description: text('description'),
  completed: boolean('completed').notNull().default(false),
  progress: numeric('progress', {
    precision: 2,
    scale: 0,
  })
    .notNull()
    .default('0'),
});

export const insertTaskSchema = createInsertSchema(taskTable, {
  title: (schema) => schema.title.min(1).max(255),
  description: (schema) => schema.description.min(0).max(255).optional(),
  completed: (schema) => schema.completed.optional(),
});
