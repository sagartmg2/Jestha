import { configureStore } from '@reduxjs/toolkit'
import auth from './reducer/auth'
export default configureStore({
    reducer: {
        auth,
    },

})
