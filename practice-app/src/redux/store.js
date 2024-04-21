import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import cakeReducer from './cake/cakeReducer'
//for multiple reducers
import rootReducer from './rootReducer'

//for dsingle reducer
// const store = configureStore({
//     reducer: cakeReducer
// })

/*
    In Redux Toolkit, the configureStore function already 
    applies the middleware internally, so we don't need to 
    use applyMiddleware separately.
*/
// const middleware = applyMiddleware(logger)

//for multiple reducers
const store = configureStore({
    reducer: rootReducer,
    //here, two important points
    //[1] the `middleware` field must be a callback
    //[2] and it must return an array of middleware
    middleware: () => [logger]
})

export default store