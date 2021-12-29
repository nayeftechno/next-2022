import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { MiddleWaresValues } from '../middleware';

interface Props extends AppProps<MiddleWaresValues> {
  pageProps: MiddleWaresValues;
}

function MyApp({ Component, pageProps }: Props  ) : JSX.Element {
  const {store} = pageProps;
  debugger
  return (<>
    <Navbar />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>);
}

export default MyApp;
