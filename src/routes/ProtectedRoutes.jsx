import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'
import AuthLayout from "../components/layout/AuthLayout";

const useAuth = () => {
    const user = localStorage.getItem('localAccessToken')
    if (user) {
        return true
    } else {
        return false
    }
}

const ProtectedRoutes = () => {

    const auth = useAuth()

    return auth ?
        <AuthLayout>
            <Outlet/>
        </AuthLayout>
        : <Navigate to="/login"/>
}

export default ProtectedRoutes;
