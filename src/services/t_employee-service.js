import t_EmployeeRepository from "../repository/t_employee-repository.js";

class t_EmployeeService {
  constructor() {
    this.t_employeeRepository = new t_EmployeeRepository();
  }
  async create(data) {
    try {
      const response = await this.t_employeeRepository.create(data);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer ");
      throw error;
    }
  }
  async getAll() {
    try {
      const response = await this.t_employeeRepository.getAll();
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }
  async update(id, data) {
    try {
      const response = await this.t_employeeRepository.update(id, data);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }
  async delete(id) {
    try {
      const response = await this.t_employeeRepository.destroy(id);
      return response;
    } catch (error) {
      console.log("something went wrong at service layer");
      throw error;
    }
  }
}
export default t_EmployeeService;
