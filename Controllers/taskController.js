const EmployeeModel = require("../Models/employeeSchema");
const TaskModel = require("../Models/taskSchema");

const postTask = async (req, res) => {
  const { title, description, priority, assignedEmployee } = req.body;
  try {
    if (!title || !description || !priority || !assignedEmployee) {
      return res.status(400).json({
        success: false,
        message: "All Fields Are Required",
      });
    }

    const Employee = await EmployeeModel.findById(assignedEmployee);

    if (!Employee) {
      return res.status(404).json({
        success: false,
        message: "Assigned employee not found",
      });
    }

    //create Task

    const Task = await TaskModel.create({
      title,
      description,
      priority,
      assignedEmployee,
      createdBy: req.user.id,
    });
    return res.status(201).json({
      success: true,

      message: "Task Created Successfully",

      Task,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to create task",
    });
  }
};

const getTasks = async (req, res) => {
  try {
    const Tasks = await TaskModel.find({ createdBy: req.user.id });
    return res.status(200).json({
      success: true,
      message: "Successfully Fetched the Tasks",
      Tasks,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable to Fetch My Tasks",
    });
  }
};

const getSingleTask = async (req, res) => {
  const { id } = req.params;

  try {
    const SingleTask = await TaskModel.findOne({
      _id: id,
      createdBy: req.user.id,
    });
    if (!SingleTask) {
      return res.status(404).json({
        success: false,

        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Fetched Single Task",
      SingleTask,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable to load the single Task",
    });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const DeletedTask = await TaskModel.findOneAndDelete({
      _id: id,
      createdBy: req.user.id,
    });

    if (!DeletedTask) {
      return res.status(404).json({
        success: false,
        message: "You can Delete only your own tasks or not Task there",
        DeletedTask
      });
    }

    return res.status(200).json({
      success: false,
        message: "You Deleted your own tasks",
    })
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable to Delete Task",
    });
  }
};

const UpdateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, priority, status } = req.body;

  try {
    const Update = await TaskModel.findOneAndUpdate(
      {
        _id: id,

        createdBy: req.user.id,
      },
      { title, description, priority, status },
      { new: true },
    );

    if (!Update) {
      return res.status(404).json({
        success: false,
        message: "Task Not Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Task Updated Successfully",
      Update,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable to Update the Task",
    });
  }
};

module.exports = { postTask, getTasks, getSingleTask, UpdateTask, deleteTask };
