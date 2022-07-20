import { configureStore } from '@reduxjs/toolkit'
import counter from './reducer/counter'

export default configureStore({
    reducer: {
        counter
    },
})