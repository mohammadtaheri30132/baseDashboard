import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth = () => {
    const user = localStorage.getItem('localAccessToken')
    if (user) {
        return true
    } else {
        return false
    }
}

const PublicRoutes = () => {

    const auth = useAuth()

    return auth ? <Navigate to="/dashboard"/> : <Outlet/>
}

export default PublicRoutes;
