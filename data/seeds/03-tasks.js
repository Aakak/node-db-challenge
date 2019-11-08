exports.seed = function(knex) {
  return knex('tasks').insert([
    { id: 1, project_id: 1, description: 'my task 1', notes: 'task 1 note', completed: true},
    { id: 2, project_id: 1, description: 'my task 2', notes: 'task 2 note', completed: false },
    { id: 3, project_id: 1, description: 'my task 3', notes: 'task 3 note', completed: false },

  ]);
};


