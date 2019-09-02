
exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('project_name', 128)
        .notNullable();
      tbl.string('project_description');
      tbl.boolean('project_completed')
        .defaultTo(false);
      tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('resources');
  })
  .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('resource_name', 128)
        .notNullable();
      tbl.string('resource_description')
  })
  .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('task_description', 256)
        .notNullable();
      tbl.string('notes', 256);
      tbl.boolean('task_completed')
        .defaultTo(false);
      tbl.integer('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
  })
  .createTable('proj_resources', tbl => {
      tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
      tbl.integer('resource_id')
        .unsigned()
        .references('id')
        .inTable('resources')
      tbl.primary(['project_id', 'resource_id'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
