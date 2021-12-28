import {useEffect} from 'react';
import type { NextPage } from 'next';
import RenderHead from '../components/RenderHead';

const HomePage: NextPage = (): JSX.Element => {
  return (<>
    <RenderHead title='Home' />
    <div className='row'>
      <div className='col-md-12'>
        <h4>Home Page</h4>
      </div>
    </div>
  </>);
};

export default HomePage;