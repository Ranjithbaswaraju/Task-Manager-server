const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({

   title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
   },

   description: {
      type: String,
      required: true,
      trim: true,
      minlength: 5
   },

   priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default:"Low",
      required:true
   },

   assignedEmployee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true
   },

   status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"],
      default: "Pending"
   },

   createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
   }

}, { timestamps: true })

const TaskModel = mongoose.model("Task", taskSchema)

module.exports = TaskModel