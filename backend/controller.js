const { Task } = require('./models.js');

module.exports = {

  allTasks: (req, res) => {
    Task.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  taskByID: (req, res) => {
    const ID = req.params.id;
    Task.findOne({_id:ID})
      .then((data) => res.json(data))
      .catch(err => res.json(err));
  },

  createTask: (req, res) => {
    const DATA = req.body;
    Task.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateTask: (req, res) => {
    const DATA = req.body;
    const ID = req.params.id;
    Task.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteTask: (req, res) => {
    const ID = req.params.id;
    Task.deleteOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}