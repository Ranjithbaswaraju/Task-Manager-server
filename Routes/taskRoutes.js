const express = require("express");
const { postTask, getTasks, getSingleTask, UpdateTask, deleteTask } = require("../Controllers/taskController");
const AuthMiddleWare = require("../MiddleWares/authMiddleWare");
const checkRole = require("../MiddleWares/roleMiddleWare");
const router = express.Router();

router.post("/tasks",AuthMiddleWare,checkRole("TL"),postTask);
router.get("/tasks",AuthMiddleWare,checkRole("TL"),getTasks);
router.get("/tasks/:id",AuthMiddleWare,checkRole("TL"),getSingleTask);
router.put("/tasks/:id",AuthMiddleWare,checkRole("TL"),UpdateTask);
router.delete("/tasks/:id",AuthMiddleWare,checkRole("TL"),deleteTask);

module.exports = router;
