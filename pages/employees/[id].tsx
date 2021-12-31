import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RenderHead from '../../components/RenderHead';

const EmployeeDetails: NextPage = (): JSX.Element => {
    const { query: { id } } = useRouter();
    return (<>
        <RenderHead title={`${id}`} />
        <div className='row'>
            <Link href={'/employees'}>
                <a>Back to employees</a>
            </Link>
            <h4>Employee Details {id}</h4>
            <div className='col-md-12'></div>
        </div>
    </>);
};

export default EmployeeDetails;