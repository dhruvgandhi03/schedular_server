const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    Taskname: {
      type: String,
      required: true,
    },
    Taskdes: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
