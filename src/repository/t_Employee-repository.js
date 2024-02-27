import t_Employee from "../models/t_Employee.js";
class t_EmployeeRepository {
  async create(data) {
    try {
      const result = await t_Employee.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
  async destroy(id) {
    try {
      const result = await t_Employee.findByIdAndDelete(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async get(id) {
    try {
      const result = await t_Employee.findById(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }

  async getAll() {
    console.log("fasdf");
    try {
      const result = await t_Employee.find({});
      console.log(result);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
  async update(id, data) {
    try {
      console.log(id);
      console.log(data);
      const result = await t_Employee.findByIdAndUpdate(id, data, {
        new: true,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log("Something went wrong in crud repo");
      throw error;
    }
  }
}
export default t_EmployeeRepository;
