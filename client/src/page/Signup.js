import React, { useState } from 'react'
import axios from "axios"

import {roles} from "../constants/role"

function Signup() {
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
    let url = `${process.env.REACT_APP_SERVER_DOMAIN}/signup`
    axios.post(url, data)
      .then(res => {

      })
      .catch(err => {

      })

  }

  let roles_arr = Object.entries(roles);
  let roles_mapping = roles_arr.map(el => {
    return <option value={el[1]}>{el[0]}</option>
  })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="text" name='email' value={state.email} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label htmlFor='password' class="form-label">Password</label>
          <input id="password" type="password" name='password' value={state.password} onChange={handleChange} />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Role</label>
            <select name='role' onChange={handleChange}>
              {roles_mapping}
            </select>
        </div>
        <input type="checkbox" name="terms" />
        // todo : try to handle checkbox on onChange
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>


  )
}
export default Signup