import { IEmployee } from './IEmployee';
import { observable, action, computed, makeAutoObservable } from 'mobx';
class EmployeeStore {

    @observable
    private employees: IEmployee[];
    @observable
    private loading: boolean;
    @observable
    private adding: boolean;

    constructor() {
        makeAutoObservable(this);
        this.employees = [];
        this.loading = false;
        this.adding = false;
    };

    @computed
    get getEmployees(): IEmployee[] {
        return this.employees;
    };

    @computed
    get getLoading(): boolean {
        return this.loading;
    };

    @computed
    get getAdding(): boolean {
        return this.adding;
    };

    @computed
    get getTota(): number {
        return this.employees.length;
    };

    @computed
    get getExists(): number {
        return this.employees.filter((employee: IEmployee) => { return employee.exist === true }).length;
    };

    @computed
    get getNotExists(): number {
        return this.employees.filter((employee: IEmployee) => { return employee.exist === false }).length;
    };

    @action
    addEmployee = (employee: IEmployee): void => {
        this.adding = true;
        fetch('http://localhost:4000/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employee)
        }).then((response) => { return response.json() }).then((response: IEmployee) => {
            this.adding = false;
            this.employees.push(response);
        }).catch((error) => {
            console.error(error);
        });
    };

    @action
    deleteEmployee = (employee: IEmployee): void => {
        fetch(`http://localhost:4000/employees/${employee.id}`, {
            method: 'DELETE'
        }).then((response) => { return response.json() }).then((response) => {
            this.employees = this.employees.filter((emp) => { return emp.id !== employee.id });
        }).catch((error) => { console.error(error) });
    }

    @action
    setChecked = (employee: IEmployee): void => {
        const currentEmployee = this.employees.find((emp: IEmployee) => { return emp.id === employee.id });
        currentEmployee!.exist = !employee.exist;
        currentEmployee!.id = employee.id;
        currentEmployee!.name = employee.name;
        fetch(`http://localhost:4000/employees/${employee.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(currentEmployee)
        }).then((response) => { return response.json() }).then((response) => {
            const index = this.employees.findIndex((emp) => { return emp.id === employee.id });
            this.employees[index] = response;
        }).catch((error) => { console.error(error) });
    };

    public async fetch() {
        this.loading = true;
        const response = await fetch('http://localhost:4000/employees');
        const data = await response.json();
        this.loading = false;
        this.employees = data;
    }

};
export default new EmployeeStore();