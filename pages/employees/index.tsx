import type {NextPage} from 'next';
import RenderHead from '../../components/RenderHead';
import EmployeesList from '../../components/EmployeesList';

const EmployeesPage : NextPage = () : JSX.Element=>{
    return(<>
    <RenderHead title='Employees'/>
    <div className='row'>
    <h4>Employees Page</h4>
        <div className='col-md-12'>
            <EmployeesList/>
        </div>
    </div>
    </>);
};

export default EmployeesPage;