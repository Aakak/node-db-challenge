
exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'react', id: 1, description: 'JS library' }, 
    { name: 'node', id: 2, description: 'Backend' }, 
    { name: 'css', id: 3, description: 'Styles'  }, 
  ]);
};
