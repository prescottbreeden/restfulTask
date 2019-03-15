// Import model
const model = require('./models.js');
// Export for use by routes
module.exports = {
  allTasks: (req, res) => {
    model.task.find()
              .then((data) => {
                res.json(data);
              })
              .catch(err => {
                console.log("Error getting all tasks - ", err);
              })
  },
  taskByID: (req, res) => {
    model.task.findOne({_id: req.params.id})
              .then((data) => {
                res.json(data);
              })
              .catch(err => {
                console.log("Error getting task by id - ", err);
              })
  },
  createTask: (req, res) => {
    model.task.create(req.body)
              .then((data) => {
                res.json(data);
              })
              .catch(err => {
                console.log("Error creating a task - ", err);
              })
  },
  updateTask: (req, res) => {
    model.task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
              .then((data) => {
                res.json(data);
              })
              .catch(err => {
                console.log("Error updating task - ", err);
              })

  },
  deleteTask: (req, res) => {
    model.task.deleteOne({_id: req.params.id})
              .then((data) => {
                res.json(data);
                console.log("Task deleted");
              })
              .catch(err => {
                console.log("Error deleting task - ", err);
              })
  }
}