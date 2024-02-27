import t_LoginRepository from "../repository/t_login-repository.js";

class t_LoginService {
  constructor() {
    this.t_loginRepository = new t_LoginRepository();
  }
  async signup(data) {
    try {
      const response = await this.t_loginRepository.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer ");
      throw error;
    }
  }
}

export default t_LoginService;
