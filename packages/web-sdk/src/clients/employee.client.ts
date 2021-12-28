import { $httpService } from "../services/http.service";

export const EmployeeClient = {
    getEmployees() {
        const url = '/employees';
        return $httpService.get(url)?.then((employees) => {return employees;});
    }
};