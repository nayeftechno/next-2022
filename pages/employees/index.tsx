import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { EmployeeClient } from '../../packages/web-sdk/src/clients/employee.client';
import RenderHead from '../../components/RenderHead';
import EmployeesList from '../../components/EmployeesList';
import EmployeeForm from '../../components/EmployeeForm';
import { EmployeesProps } from '../../types/EmployeesProps';

const EmployeesPage: NextPage = (): JSX.Element => {
    const [state, setState] = useState<EmployeesProps>({ employees: [], loading: false, error: '' });
    useEffect(() => {
        function getEmployees() {
            setState({ ...state, loading: true });
            EmployeeClient.getEmployees()?.then((response: any) => {
                setState({ ...state, loading: false, employees: response, error: '' });
            }).catch((error) => {
                setState({ ...state, loading: false, employees: [], error: error.message });
            });
        };
        getEmployees();
    }, []);
    function addEmployee(payload: object,callback : Function) {
        EmployeeClient.addEmployee(payload)?.then((response: any) => {
            setState({ ...state, employees: [...state.employees, { ...response }] });
            callback();
        }).catch((error) => { });
    }
    return (<>
        <RenderHead title='Employees' />
        <div className='row'>
            <h4>Employees Page</h4>
            <div className='col-md-4'>
                <EmployeesList {...state} />
            </div>
            <div className='col-md-4'>
                <EmployeeForm addEmployee={addEmployee} />
            </div>
            <div className='col-md-4'>
                <EmployeesList {...state} />
            </div>
        </div>
    </>);
};

export default EmployeesPage;