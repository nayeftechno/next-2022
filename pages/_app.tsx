import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) : JSX.Element {
  return (<>
    <Navbar />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>);
}

export default MyApp;
