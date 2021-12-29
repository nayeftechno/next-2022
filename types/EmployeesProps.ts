import {IEmployee} from '../interfaces/IEmployee';
export type EmployeesProps = {
    employees : IEmployee[];
    loading : boolean;
    error : string;
};