const Task = require("../models/Task");
const asyncWrapper = require("../middlewares/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(201).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task)
    return next(createCustomError(`No task with that id:${taskId}`, 404));
  res.status(201).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const allowedFields = ['field1', 'field2', 'field3']; // specify allowed fields
  const updateFields = {};
  for (const key in req.body) {
    if (allowedFields.includes(key)) {
      updateFields[key] = req.body[key];
    }
  }
  const updatedTask = await Task.findOneAndUpdate(
    { _id: taskId },
    { $set: updateFields },
    {
      new: true,
      runValidators: true,
    }
  );
  if (!updatedTask)
    return next(createCustomError(`No task with that id:${taskId}`, 404));
  res.status(200).json({ updatedTask });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const deletedTask = await Task.findOneAndDelete({ _id: taskId });
  if (!deletedTask)
    return next(createCustomError(`No task with that id:${taskId}`, 404));
  res.status(200).json({ deletedTask });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
