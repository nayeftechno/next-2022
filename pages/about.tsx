import type { NextPage } from 'next';
import RenderHead from '../components/RenderHead';

const AboutPage: NextPage = (): JSX.Element => {
    return (<>
        <RenderHead title='About' />
        <div className='row'>
        <h4>About Page</h4>
            <div className='col-md-12'>
            </div>
        </div>
    </>);
};

export default AboutPage;