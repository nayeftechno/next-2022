import { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeesList(): JSX.Element {
    const [state, setState] = useState({ loading: false, employees: [] as any });
    useEffect(() => {
        async function getEmployees() {
            setState({ ...state, loading: true });
            const response = await axios.get('http://localhost:4000/employees');
            const { data } = response;
            setState({ ...state, loading: false, employees: [...data] });
        };
        getEmployees();
    }, []);
    const { loading, employees } = state;
    return (<>
        {loading ? (<h4>Loading...</h4>) : (<ul className='list-group'>
            {
                employees.map((employee: any) => {
                    const { id, name } = employee;
                    return (<li key={id} className='list-group-item'>{name}</li>);
                })
            }
        </ul>)}
    </>);
};

export default EmployeesList