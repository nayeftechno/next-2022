import { memo } from 'react';
import Link from 'next/link';

function Navbar(): JSX.Element {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link href={'/'}>
                        <a className="nav-link">Home</a>
                    </Link>
                </li>
                {/* <li className='nav-item'>
                    <Link href={'/about'}>
                        <a className="nav-link">About</a>
                    </Link>
                </li> */}
                {/* <li className='nav-item'>
                    <Link href={'/employees'}>
                        <a className="nav-link">Employees</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href={'/extra-employees'}>
                        <a className="nav-link">Extra Employees</a>
                    </Link>
                </li> */}
                {/* <li className='nav-item'>
                    <Link href={'/users'}>
                        <a className="nav-link">Users</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href={'/posts'}>
                        <a className="nav-link">Posts</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href={'/products'}>
                        <a className="nav-link">Products</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href={'/news'}>
                        <a className="nav-link">News</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href={'/company'}>
                        <a className="nav-link">Company</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href={'/test'}>
                        <a className="nav-link">Test</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href={'/pro'}>
                        <a className="nav-link">Pro</a>
                    </Link>
                </li> */}
                <li className='nav-item'>
                    <Link href={'/without-swr'}>
                        <a className="nav-link">Without SWR</a>
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link href={'/with-swr'}>
                        <a className="nav-link">With SWR</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>);
};

export default memo(Navbar);
