import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    useTitle('Add Service')

    return (
        <div>
            <h2 className="text-8xl"> Add Service </h2>
        </div>
    );
};

export default AddService;