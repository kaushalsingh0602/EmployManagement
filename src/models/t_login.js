import mongoose from "mongoose";
const loginSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const t_login = mongoose.model("t_login", loginSchema);

export default t_login;
