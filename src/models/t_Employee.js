import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  f_Id: { type: Number, required: true },
  f_Image: String,
  f_Name: { type: String, required: true },
  f_Email: { type: String, required: true },
  f_Mobile: { type: String, required: true },
  f_Designation: { type: String, required: true },
  f_gender: { type: String, required: true },
  f_Course: { type: String, required: true },
  f_Createdate: { type: Date, default: Date.now },
});

const t_Employee = mongoose.model("t_Employee", employeeSchema);

export default t_Employee;
