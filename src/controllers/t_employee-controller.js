import t_EmployeeService from "../services/t_employee-service.js";
const t_employeeService = new t_EmployeeService();
export const createEmployee = async (req, res) => {
  try {
    const response = await t_employeeService.create({
      f_Id: req.body.Id,
      f_Image: req.body.Image,
      f_Name: req.body.Name,
      f_Email: req.body.Email,
      f_Mobile: req.body.Mobile,
      f_Designation: req.body.Designation,
      f_gender: req.body.gender,
      f_Course: req.body.Course,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong at controller",
      data: {},
      err: error,
    });
  }
};
export const getALLEmployee = async (req, res) => {
  try {
    const response = await t_employeeService.getAll();
    return res.status(201).json({
      success: true,
      message: "Successfully fetched All employee Data",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong at controller",
      data: {},
      err: error,
    });
  }
};
export const updateEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await t_employeeService.update(id, {
      f_Id: req.body.Id,
      f_Image: req.body.Image,
      f_Name: req.body.Name,
      f_Email: req.body.Email,
      f_Mobile: req.body.Mobile,
      f_Designation: req.body.Designation,
      f_gender: req.body.gender,
      f_Course: req.body.Course,
    });
    return res.status(201).json({
      success: true,
      message: "Successfully Updated employee Data",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong at controller",
      data: {},
      err: error,
    });
  }
};
export const DeleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const response = t_employeeService.delete(id);
    return res.status(201).json({
      success: true,
      message: "Successfully Deleted  employee Data",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong at controller",
      data: {},
      err: error,
    });
  }
};
