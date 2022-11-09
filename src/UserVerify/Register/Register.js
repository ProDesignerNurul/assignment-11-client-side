import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const Register = () => {


    const [error, setError] = useState('');

    const [accepted, setAccepted] = useState(false);

    const {providerLogin, githubLogin, createUser} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        githubLogin(githubProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
        })
        .catch( error => console.error(error))
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password)

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user)
            setError('');
            form.reset();
        })
        .catch(error => {
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
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="email" className="input input-bordered" />
                        </div>
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
                        <p> Already Have an Account , please <Link className='text-blue-700' to="/login"> Log In</Link></p>
                    </div>
                    <p className='text-red-500 mb-3'> {error}</p>
                <button onClick={handleGoogleSignIn} className="mb-5 mx-3 btn btn-outline btn-warning">Google Sign In</button>
                <button onClick={handleGithubSignIn} className="mb-5 mx-3 btn btn-outline btn-warning">GitHub Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default Register;