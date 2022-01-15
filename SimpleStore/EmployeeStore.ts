import { IEmployee } from './IEmployee';
import { observable, action, computed, makeObservable } from 'mobx';

class EmployeeStore {

    public employees: IEmployee[] = [];
    public loading: boolean = false;
    public adding: boolean = false;

    constructor() {
        makeObservable(this, {
            employees: observable,
            loading: observable,
            adding: observable,
            getEmployees: computed,
            getLoading: computed,
            getAdding: computed,
            getTotal: computed,
            getExists: computed,
            getNotExists: computed,
            addEmployee: action,
            setChecked: action,
            deleteEmployee: action,
            fetch: action
        });
    };

    get getEmployees(): IEmployee[] {
        return this.employees;
    };

    get getLoading(): boolean {
        return this.loading;
    };

    get getAdding(): boolean {
        return this.adding;
    };

    get getTotal(): number {
        return this.employees.length;
    };

    get getExists(): number {
        return this.employees.filter((employee: IEmployee) => { return employee.exist === true }).length;
    };

    get getNotExists(): number {
        return this.employees.filter((employee: IEmployee) => { return employee.exist === false }).length;
    };

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

    deleteEmployee = (employee: IEmployee): void => {
        fetch(`http://localhost:4000/employees/${employee.id}`, {
            method: 'DELETE'
        }).then((response) => { return response.json() }).then((response) => {
            this.employees = this.employees.filter((emp) => { return emp.id !== employee.id });
        }).catch((error) => { console.error(error) });
    }

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

    fetch = async () => {
        this.loading = true;
        const response = await fetch('http://localhost:4000/employees');
        const employees = await response.json();
        this.loading = false;
        this.employees = employees;
    };

};
export default EmployeeStore;
