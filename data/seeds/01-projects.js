
exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { project_name: 'test-1', project_description: 'test-1', project_completed: false },
    { project_name: 'test-2', project_description: 'test-2', project_completed: false },
    { project_name: 'test-3', project_description: 'test-3', project_completed: false }    
  ])
};
