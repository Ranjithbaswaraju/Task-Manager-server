const express = require("express");
const {EmployeeTasks,updateMyTask} = require("../Controllers/employeeController");
const AuthMiddleWare = require("../MiddleWares/authMiddleWare");
const checkRole = require("../MiddleWares/roleMiddleWare");
const router = express.Router();

router.get("/employeeTasks",AuthMiddleWare,checkRole("Employee"),EmployeeTasks);
router.put("/employeetasks/:id/status",AuthMiddleWare,checkRole("Employee"),updateMyTask);
module.exports = router;