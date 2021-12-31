import type {NextPage} from 'next';
import {useRouter} from 'next/router';
import RenderHead from '../../components/RenderHead';

const ParamsPage : NextPage=():JSX.Element=>{
    const {query : {params = []}} = useRouter();
    return(<>
    <RenderHead title='$$$'/>
    <div className='row'>
        <h4>Params Page</h4>
        <div className='col-md-12'>
           {
               //@ts-ignore
           params.length > 0 && ([...params].map((param)=>{
               return(<div key={param}>{param}</div>)
           }))}
        </div>
    </div>
    </>);
};

export default ParamsPage;