import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import RenderHead from '../../../../components/RenderHead';
import styled from 'styled-components';
import Link from 'next/link';

const Anchor = styled.a`
color : blue;
cursor : pointer;
`;

const ReviewPage:NextPage=():JSX.Element=>{
    const {query : {id,reviewId},push} = useRouter();
    return(<>
    <RenderHead title={String(reviewId)}/>
    <div className='row'>
        <Link href={`/employees/${id}`}>
            <a>Back</a>
        </Link>
        <div className='col-md-12'></div>
    </div>
    </>);
};

export default ReviewPage;