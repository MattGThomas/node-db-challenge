
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    { task_description: 'test - 12', task_completed: true, project_id: 2 }
  ])
};
