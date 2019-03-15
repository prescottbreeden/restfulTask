const controller = require('./controller.js');

module.exports = app => {

  app
    .get('/api/tasks', controller.allTasks)
    .get('/api/tasks/:id', controller.taskByID)
    .post('/api/tasks', controller.createTask)
    .put('/api/tasks/:id', controller.updateTask)
    .delete('/api/tasks/:id', controller.deleteTask);

}