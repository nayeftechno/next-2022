import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import RenderHead from '../../../components/RenderHead';
import styled from 'styled-components';

const Anchor = styled.a`
 color : blue;
 cursor : pointer
`;

const EmployeeDetails: NextPage = (): JSX.Element => {
    const { query: { id , name}, push } = useRouter();
    return (<>
        <RenderHead title={`${id}`} />
        <div className='row'>
            <Anchor>
                <a onClick={() => push('/employees')}>Back to employees</a>
            </Anchor>
            <h4>Employee Details {id} {name}</h4>
            <div className='col-md-12'></div>
        </div>
    </>);
};

export default EmployeeDetails;