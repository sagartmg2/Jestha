import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout } from './redux/reducer/auth'

export default function Auth() {
    const auth = useSelector((state) => state.auth.value)
    const dispatch = useDispatch()

    console.log("RENDER - AUTH");
    return (
        <>
            <h1>{auth ? "logout" : "login"}</h1>
            <button onClick={() => dispatch(login())}>login</button>
            <button onClick={() => dispatch(logout())}>logout</button>
        </>
    )
}
