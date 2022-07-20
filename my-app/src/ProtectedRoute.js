import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {


    let is_auth = true;

    // token 

    return is_auth ? <Outlet /> : <Navigate to="/login" />
    // <div>ProtectedRoute</div>

}
