import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: false,
    user:{},
  },
  reducers: {
    login: (state,action) => {
      console.log({action})
      state.value = true
    },
    logout: (state) => {
      state.value = false
    },
    setUser:(state,action) => {
      state.user = action.payload
    }
   
  },
})

// Action creators are generated for each case reducer function
export const { login,logout,setUser} = authSlice.actions

export default authSlice.reducer