import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import RenderHead from '../../../components/RenderHead';
import styled from 'styled-components';

const Anchor = styled.a`
 color : blue;
 cursor : pointer
`;

const EmployeeDetails: NextPage = (): JSX.Element => {
    const { query: { id }, push } = useRouter();
    return (<>
        <RenderHead title={`${id}`} />
        <div className='row'>
            <Link href={'/employees'}>
            <a>Back to employees</a>
            </Link>
            <h4>Employee Details {id}</h4>
            <Link href={`/employees/${id}/reviews/${Number(id)*2}`}>Reviews</Link>
            <div className='col-md-12'></div>
        </div>
    </>);
};

export default EmployeeDetails;