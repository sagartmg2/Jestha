import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import Forbidden from './Forbidden'

export default function ProtectedRoute(props) {
    const { is_logged_in, user } = useSelector((state) => state.auth)

    if (is_logged_in && props.access_to && props.access_to != user.role) {
       
        return <Forbidden />
    }

    return is_logged_in ? <Outlet /> : <Navigate to="/login" />
}