import EmployeeStore from "./employee.store";

class CompanyStore {
    
    employeeStore: EmployeeStore;
    
    constructor() {
        this.employeeStore = new EmployeeStore();
    };
};

export default CompanyStore;