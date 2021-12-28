import { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode
};

function Layout({ children }: LayoutProps): JSX.Element {
    return (<div className='container-fluid container-padding-top'>
        {children}
    </div>);
};

export default Layout;