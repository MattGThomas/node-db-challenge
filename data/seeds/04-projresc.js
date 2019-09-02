
exports.seed = function(knex, Proimse) {
  // Deletes ALL existing entries
  return knex('proj_resources').insert([
    { project_id: 1, resource_id: 1}
  ])
};
