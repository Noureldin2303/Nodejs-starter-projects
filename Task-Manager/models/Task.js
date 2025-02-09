const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 3 },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", TaskSchema);