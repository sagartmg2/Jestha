import React, { useState } from 'react'
import axios from "axios"

function Login() {
    // store to localstorage and to redux store
    const [state, setState] = useState({
        email: "",
        password: "",
        role: "",
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { email, password, role } = state
        let data = { email, password, role }
        let url = `${process.env.REACT_APP_SERVER_DOMAIN}/login`
        axios.post(url, data)
            .then(res => {

            })
            .catch(err => {

            })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="text" name='email' value={state.email} onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name='password' value={state.password} onChange={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>


    )
}
export default Login