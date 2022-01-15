import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import EmployeeStore from '@/SimpleStore/EmployeeStore';
import { EmployeeContextProvider } from '@/contexts/EmployeeContext';

const store = new EmployeeStore();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (<>
    <EmployeeContextProvider store={store}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </EmployeeContextProvider>
  </>);
}

export default MyApp;
