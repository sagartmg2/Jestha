import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

import { roles } from "../constants/role"

function Signup() {

  let navigate = useNavigate();

  // store to localstorage and to redux store
  const [state, setState] = useState({
    name: "tet",
    email: "test@test.com",
    password: "password",
    role: "buyer",
  });

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { name, email, password, role } = state
    let data = { name, email, password, role }
    let url = `${process.env.REACT_APP_SERVER_DOMAIN}/users/signup`
    axios.post(url, data)
      .then(res => {
        navigate("/login")
      })
      .catch(err => {
          
      })
  }

  let roles_arr = Object.entries(roles);
  let roles_mapping = roles_arr.map(el => {
    return <option value={el[1]}>{el[0]}</option>
  })

  return (
    <div className='container mt-5'>
      <div className='row mt-5 justify-content-center'>
        <form onSubmit={handleSubmit} className="mt-5 col-8">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
            <input type="text" name='name' value={state.name} className="form-control" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="text" name='email' value={state.email} className="form-control" onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor='password' className="form-label">Password</label>
            <input id="password" className="form-control" type="password" name='password' value={state.password} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Role</label>
            <select name='role' className="form-control" onChange={handleChange}>
              {roles_mapping}
            </select>
          </div>
          {/* <input type="checkbox" name="terms" /> */}
          {/* // todo : try to handle checkbox on onChange */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>


  )
}
export default Signup