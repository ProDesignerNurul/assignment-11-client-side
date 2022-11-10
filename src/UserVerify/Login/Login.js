import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';
import useTitle from '../../hooks/useTitle';
import login from '../../images/login/login.webp';

const Login = () => {

    const [error, setError] = useState('');

    useTitle('Login')


    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    

    const {signIn} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            form.reset();
            setError('');
            navigate(from, {replace: true})
        })
        .catch( error => {
            console.error(error)
            setError(error.message);
        })
    }

    


    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    {/* <img className='w-1/2 rounded-lg' src={login} alt="" /> */}
                </div>
                <form onSubmit={handleSignIn} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p> Are you new in this Website, please <Link className='text-blue-700' to="/register"> Register</Link></p>
                    </div>
                    <p className='text-red-500 mb-3'> {error}</p>
                </form>
            </div>
        </div>
    );
};

export default Login;