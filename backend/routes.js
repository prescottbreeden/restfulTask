// Import controller
const controller = require('./controller.js');
// Export for use by the controller
module.exports = (app) => {
  app.get('/', controller.allTasks);
  app.get('/tasks/:id', controller.taskByID);
  app.post('/tasks', controller.createTask);
  app.put('/tasks/:id', controller.updateTask);
  app.delete('/tasks/:id', controller.deleteTask);
}