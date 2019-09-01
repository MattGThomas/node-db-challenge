
exports.up = function(knex) {
  return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('projects_name', 128)
        .notNullable();
      tbl.string('project_description');
      tbl.boolean('project_completed');
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
      tbl.boolean('task_completed');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
