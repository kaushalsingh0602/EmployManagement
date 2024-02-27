import t_login from "../models/t_login.js";

class t_LoginRepository {
  async create(data) {
    try {
      const result = t_login.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
  async destroy(id) {
    try {
      const result = t_login.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
}
export default t_LoginRepository;
