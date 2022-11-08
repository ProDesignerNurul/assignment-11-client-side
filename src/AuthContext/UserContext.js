import React, { createContext } from 'react';

export const AuthContext = createContext();



const UserContext = ({children}) => {

    const user = {
        name: 'nurul',
        email: 'nurul@a.com'
    }

    const authInfo = {user}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;