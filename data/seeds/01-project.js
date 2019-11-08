
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'My Fancy Project', description: 'My fancy project description'},
        { id: 2, name: 'Graduate from Lambda', description: 'Complete my studies with Lambda'},
        { id: 3, name: 'learn to drive', description: 'Learn how to drive'}
      ]);
    });
};