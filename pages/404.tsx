import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import RenderHead from '../components/RenderHead';
import styled from 'styled-components';

const Flex = styled.div`
 display : flex;
 justify-content:center;
 text-align:center;
 padding : 10px;
`;

const NotFoundPage: NextPage = () => {
    const { push } = useRouter();
    return (<>
        <RenderHead title='404' />
        <div className='row'>
            <Flex>
                <div className='col-md-12'>
                    <h4>Not Found Page</h4>
                    <button onClick={() => push('/')} className='btn btn-success'>Back To Home</button>
                </div>
            </Flex>
        </div>
    </>);
};

export default NotFoundPage;