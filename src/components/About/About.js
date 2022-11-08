import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext/UserContext';

const About = () => {
    
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h2>{user?.email}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis perferendis eveniet accusamus a! Quod ipsum consectetur laboriosam optio, aliquid obcaecati.</p>
        </div>
    );
};

export default About;