import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthContext/UserContext';
import logo from '../../../images/logo/nurulBooks.png';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => console.error(error))
    }

    const menuItems =
        <>
            <li className='btn btn-outline btn-warning mr-2 rounded-lg'><Link to="/home">Home</Link></li>
            <li className='btn btn-outline btn-warning mr-2 rounded-lg'><Link to="/blogs">Blogs</Link></li>
            <li className='btn btn-outline btn-warning mr-2 rounded-lg'><Link to="/about">About</Link></li>
        </>

    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto mb-6">
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
                        <h2 className='text-3xl'>NURUL <span className='text-purple-500'>RIDE SHARING</span></h2>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user?.uid ?
                            <>
                                
                                <a className="btn btn-outline btn-warning mr-2"  >Add Service</a>
                                <a className="btn btn-outline btn-warning mr-2"  >My Review</a>
                                <a className="btn btn-outline btn-warning mr-2" onClick={handleLogOut} >Log Out</a>
                            </>
                            :
                            <>
                                <a className="btn btn-outline btn-warning mr-2"><Link to='/login'>Log In</Link></a>
                                <a className="btn btn-outline btn-warning mr-2"><Link to='/register'>Register</Link></a>
                            </>
                    }


                    {/* <a className="btn"> <Link to='/login'>Log In</Link> </a> */}
                </div>
            </div>
        </div>
    );
};

export default Header;