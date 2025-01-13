const express = require("express");
const router = express.Router();
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
} = require("../controllers/task");

router.route("/").get(limiter, getAllTasks).post(limiter, createTask);
router.route("/:id").get(limiter, getTask).patch(limiter, updateTask).delete(limiter, deleteTask);

module.exports = router;