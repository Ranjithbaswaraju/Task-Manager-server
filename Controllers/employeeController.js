const EmployeeModel = require("../Models/employeeSchema");
const TaskModel = require("../Models/taskSchema");

const EmployeeTasks = async (req, res) => {
  try {
    //Find the login Employee

    const employee = await EmployeeModel.findOne({
      userId: req.user.id,
    });

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }

    //Fetching the Assigned Tasks

    const tasks = await TaskModel.find({
      assignedEmployee: employee._id,
    });

    return res.status(200).json({
      success: true,
      message: "Your Tasks Fetched successfully",
      tasks,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable to Load Tasks",
    });
  }
};

const updateMyTask = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    // Find Logged-in Employee
    const employee = await EmployeeModel.findOne({
      userId: req.user.id,
    });
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee not found",
      });
    }
    // Update Only Assigned Task
    const updatedTask = await TaskModel.findOneAndUpdate(
      {
        _id: id,
        assignedEmployee: employee._id,
      },
      {
        status,
      },
      {
        new: true,
      },
    );
    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Task Status Updated Successfully",
      updatedTask,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Unable to Update Task",
    });
  }
};
module.exports = { EmployeeTasks, updateMyTask };
