import { configureStore } from '@reduxjs/toolkit'
import auth from './reducer/auth'
import cart from './reducer/cart'
export default configureStore({
    reducer: {
        auth,
        cart
    },
})
