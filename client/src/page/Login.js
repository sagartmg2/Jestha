import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Alert from '../component/Alert';

function Login() {
    let navigate = useNavigate();

    // store to localstorage and to redux store
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        status: "",
        message: ""
    });

    const [state, setState] = useState({
        email: "test@test.com",
        password: "password",
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password, role } = state
        let data = { email, password, role }
        let url = `${process.env.REACT_APP_SERVER_DOMAIN}/users/login`

        setLoading(true)

        axios.post(url, data)
            .then(res => {
                localStorage.setItem("access_token", res.data.access_token)
                navigate("/")
            })
            .catch(err => {
                setLoading(false)
                // console.log({err})
                // console.log(err.response)
                setAlert({
                    status: "danger",
                    message: err.response.data.message
                })
            })

    }
    return (
        <div className='container mt-5'>
            <div className='row mt-5 justify-content-center'>
                {
                    alert.message
                    &&
                    <Alert
                        status={alert.status}
                        message={alert.message}
                    />
                }
                <form onSubmit={handleSubmit} className="mt-5 col-8">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="text" name='email' className='form-control' value={state.email} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' className='form-control' value={state.password} onChange={handleChange} />
                    </div>
                    <button type="submit" disabled={loading} className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Login