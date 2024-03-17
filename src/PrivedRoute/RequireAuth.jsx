import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../router/useAuth';

const RequireAuth = ({ children }) => {
    const loacation = useLocation()
    const {user} = useAuth()

    if (!user) {
        return <Navigate to="/login" state={{ from: loacation }} />
    }

    return children
};

export { RequireAuth };