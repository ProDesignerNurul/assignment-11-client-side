import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/UserContext';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    

    if(loading) {
        return <h3 className='text-5xl'> Loading...</h3>
    }

    if( user ) {
        return children;
    }

    return <Navigate state={{from: location}} replace></Navigate>
};

export default PrivateRoute;