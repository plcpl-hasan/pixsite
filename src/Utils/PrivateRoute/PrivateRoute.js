import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { email, isLoading } = useSelector(state => state.auth)

    if (isLoading) {
        return <p className='text-center  text-4xl'> Loading... </p>
    }
    if (!isLoading && !email) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children

};

export default PrivateRoute;