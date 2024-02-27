import t_LoginService from "../services/t_login-service.js";
const t_loginService = new t_LoginService();
export const signup = async (req, res) => {
  try {
    const response = await t_loginService.signup({
      email: req.body.email,
      password: req.body.password,
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
