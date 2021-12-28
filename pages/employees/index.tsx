import type {NextPage} from 'next';
import RenderHead from '../../components/RenderHead';

const EmployeesPage : NextPage = () : JSX.Element=>{
    return(<>
    <RenderHead title='Employees'/>
    <div className='row'>
        <div className='col-md-12'>
            <h4>Employees Page</h4>
        </div>
    </div>
    </>);
};

export default EmployeesPage;