import { IEmployee } from '../interfaces/IEmployee';
import {EmployeesProps} from '../types/EmployeesProps';

function EmployeesList({ loading, employees, error }: EmployeesProps): JSX.Element {
    return (<>
        {loading && !error ? (<h4>Loading...</h4>) : (<ul className='list-group'>
            {
                employees.map((employee: IEmployee) => {
                    const { id, name } = employee;
                    return (<li key={id} className='list-group-item'>{name}</li>);
                })
            }
        </ul>)}
        {error ? <h4>{error}</h4> : null}
    </>);
};

export default EmployeesList