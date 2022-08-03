import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    is_logged_in: false,
    user: {
    },
  },
  reducers: {
    login: (state, action) => {
      state.is_logged_in = true
    },
    logout: (state) => {
      state.is_logged_in = false
    },
    setUser: (state, action) => {
      console.log(action.payload)
      state.user = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout, setUser } = authSlice.actions

export default authSlice.reducer