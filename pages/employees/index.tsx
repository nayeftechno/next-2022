import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { EmployeeClient } from '../../packages/web-sdk/src/clients/employee.client';
import RenderHead from '../../components/RenderHead';
import EmployeesList from '../../components/EmployeesList';
import { IEmployee } from '../../interfaces/IEmployee';

export type EmployeesStateProps = {
    employees: IEmployee[];
    loading: boolean;
    error: string;
};

const EmployeesPage: NextPage = (): JSX.Element => {
    const [state, setState] = useState<EmployeesStateProps>({ employees: [], loading: false, error: '' });
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
    return (<>
        <RenderHead title='Employees' />
        <div className='row'>
            <h4>Employees Page</h4>
            <div className='col-md-12'>
                <EmployeesList {...state} />
            </div>
        </div>
    </>);
};

export default EmployeesPage;