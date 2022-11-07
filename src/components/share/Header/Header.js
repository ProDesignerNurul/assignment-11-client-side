import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/nurulBooks.png';

const Header = () => {

    const menuItems =
        <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/about">About</Link></li>
        </>

    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" href="/" className="btn btn-ghost normal-case text-xl">
                        <img className='w-10 mr-4' src={logo} alt="" />
                        <h2>NURUL BOOKS</h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Header;