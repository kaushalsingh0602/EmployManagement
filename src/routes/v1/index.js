import express from "express";

import {
  DeleteEmployee,
  createEmployee,
  getALLEmployee,
  updateEmployee,
} from "../../controllers/t_employee-controller.js";
import { signup } from "../../controllers/t_login-controller.js";
const router = express.Router();

// user
router.post("/signup", signup);
// employee
router.post("/createEmployee", createEmployee);
router.put("/updateEmployee/:id", updateEmployee);
router.get("/getALLEmployee", getALLEmployee);
router.delete("/deleteEmployee/:id", DeleteEmployee);

export default router;
