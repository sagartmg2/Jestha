import { configureStore } from '@reduxjs/toolkit'
import auth from './reducer/auth'
import counter from './reducer/counter'

export default configureStore({
    reducer: {
        auth,
        counter,
    },
})