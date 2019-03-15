const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String
  },
  desc: {
    type: String, 
    required: [true, 'description must not be blank you num num'],
    default: ""
  }, 
  completed: {
    type: Boolean, 
    default: false
  }
}, {timestamps:true});

const Task = mongoose.model('Task', TaskSchema);

module.exports = {
  Task
}