
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    { resource_name: 'test-1', resource_description: 'test-1'},
    { resource_name: 'test-2', resource_description: 'test-2'},
    { resource_name: 'test-3', resource_description: 'test-3'}        
  ])
};
