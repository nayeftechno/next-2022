import { useEffect, useState } from 'react';
import { EmployeeClient } from '../packages/web-sdk/src/clients/employee.client';

function EmployeesList(): JSX.Element {
    const [state, setState] = useState({ loading: false, employees: [] as any, error: '' });
    useEffect(() => {
        async function getEmployees() {
            setState({ ...state, loading: true, error: '' });
            EmployeeClient.getEmployees()?.then((response: any) => {
                setState({ ...state, loading: false, employees: [...response], error: '' });
            }).catch((error) => {
                setState({ ...state, loading: false, employees: [], error: error.message });
            });
        };
        getEmployees();
    }, []);
    const { loading, employees, error } = state;
    return (<>
        {loading && !error ? (<h4>Loading...</h4>) : (<ul className='list-group'>
            {
                employees.map((employee: any) => {
                    const { id, name } = employee;
                    return (<li key={id} className='list-group-item'>{name}</li>);
                })
            }
        </ul>)}
        {error ? <h4>{error}</h4> : null}
    </>);
};

export default EmployeesList