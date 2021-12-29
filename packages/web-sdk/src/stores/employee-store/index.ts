import EmployeePageStore from "./employee.page.store";

class CompanyStore{
    employeePage: EmployeePageStore;
    constructor(){
        this.employeePage = new EmployeePageStore();
    };
};

export default CompanyStore;