const EmployeeModel = require("../Models/employeeSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../Models/userSchema");

const postEmployee = async (req, res) => {
  const { name, email, password, designation } = req.body;

  try {
    // Validation
    if (!name || !email || !password || !designation) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Check Existing Employee
    const checkEmployeeExist = await EmployeeModel.findOne({ email });

    if (checkEmployeeExist) {
      return res.status(409).json({
        success: false,
        message: "Employee already exists",
      });
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create User Login FIRST
    const user = await UserModel.create({
      name,
      email,

      password: hashedPassword,

      role: "Employee",
    });

    // THEN Create Employee
    const employee = await EmployeeModel.create({
      name,
      email,
      designation,

      userId: user._id,

      createdBy: req.user.id,
    });

    return res.status(201).json({
      success: true,

      message: "Employee Created Successfully",

      employee,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,

      message: "Unable to create employee",
    });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const Employees = await EmployeeModel.find();
    return res.status(200).json({
      success: true,
      message: "All Employees Fetched Successfully",
      Employees,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Unable to Load the All Employees",
    });
  }
};

const MyEmployees = async (req, res) => {
  const { id } = req.params;

  // try {
  //   const singleEmp = await EmployeeModel.findOne({
  //     _id: id,

  //     createdBy: req.user.id,
  //   });

  //   if (!singleEmp) {
  //     return res.status(404).json({
  //       success: false,

  //       message: "Employee not found",
  //     });
  //   }

  //   return res.status(200).json({
  //     success: true,

  //     message: "My Employee Fetched Successfully",

  //     singleEmp,
  //   });
  // } catch (err) {
  //   return res.status(500).json({
  //     success: false,
  //     message: "Unable to Load the My Employee",
  //   });
  // }

  try {
    const employees = await EmployeeModel.find({
      createdBy: req.user.id,
    });

    return res.status(200).json({
      success: true,

      employees,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,

      message: "Unable to Load Employees",
    });
  }
};

const searchEmployee = async (req, res) => {
  const { name } = req.params;

  try {
    const employees = await EmployeeModel.find({
      createdBy: req.user.id,

      name: {
        $regex: name,

        $options: "i",
      },
    });

    if (employees.length === 0) {
      return res.status(404).json({
        success: false,

        message: "Employee not found",
      });
    }

    return res.status(200).json({
      success: true,

      message: "Employees Fetched Successfully",

      employees,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,

      message: "Unable to search employee by name",
    });
  }
};
module.exports = {
  postEmployee,
  getAllEmployees,
  MyEmployees,
  searchEmployee,
};
