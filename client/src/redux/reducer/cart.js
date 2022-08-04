import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      // if already exists, just update quantity 
      let existing = state.items.find(el => el._id == action.payload._id);
      if (existing) {
        existing.quantity += 1;
      } else {
        action.payload.quantity = 1;
        state.items.push(action.payload)
      }
    },
    removeFromCart: (state) => {
      // state.items = state.items.filter(el  => el.)
    },
    clearCart: (state, action) => {
      state.items = [];
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer