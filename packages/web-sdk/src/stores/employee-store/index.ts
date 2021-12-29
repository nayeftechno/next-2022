import EmployeePageStore from "./employee.page.store";

export type InitialState = Partial<{
    employeePage: EmployeePageStore;
}>;

class CompanyStore {
    
    employeePage: EmployeePageStore;
    
    constructor(initialState: InitialState = {}) {
        this.employeePage = new EmployeePageStore(initialState.employeePage);
    };
};

export default CompanyStore;