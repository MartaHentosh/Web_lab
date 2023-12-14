import { Outlet, Navigate } from 'react-router-dom'
import React from 'react'

const ProtectedRoutes = () => {
    let auth = {'loggedInUserIndex': false}
    return(
        auth.loggedInUserIndex ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default ProtectedRoutes;