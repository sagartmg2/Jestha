import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: false,
  },
  reducers: {
    login: (state) => {
      state.value = true
    },
    logout: (state) => {
      state.value = false
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { login,logout} = authSlice.actions

export default authSlice.reducer