import { configureStore, applyMiddleware  } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import auth from './reducer/auth'
import counter from './reducer/counter'
import authSaga from './saga/authSaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: {
        auth,
        counter,
    },
    middleware:[
        sagaMiddleware
    ]
})

// then run the saga
sagaMiddleware.run(authSaga)