const express = require("express");
const { postEmployee, getAllEmployees, MyEmployees,searchEmployee } = require("../Controllers/TLcontroller");
const AuthMiddleWare = require("../MiddleWares/authMiddleWare");
const checkRole = require("../MiddleWares/roleMiddleWare");
const router = express.Router();

router.post("/employee",AuthMiddleWare,checkRole("TL"),postEmployee);
router.get("/employee",AuthMiddleWare,checkRole("TL"),getAllEmployees);
router.get("/employee/search/:name",AuthMiddleWare,checkRole("TL"),searchEmployee)
router.get("/my-employees",AuthMiddleWare,checkRole("TL"),MyEmployees);

module.exports = router;
