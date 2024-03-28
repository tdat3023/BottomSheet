import AxiosConfig from "./AxiosConfig";

class EmployeeApi {
  getAllEmployees() {
    let url = "/all";
    return AxiosConfig.get(url);
  }
}

const employeeApi = new EmployeeApi();
export default employeeApi;
