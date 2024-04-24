import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { composeWithDevTools } from '@redux-devtools/extension';
//import redux-thunk
import {thunk} from 'redux-thunk';

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
    // middleware: () => [logger]
    //for redux dev tools extension', here use getDefaultMiddleware function
    //the thunk middleware allows an action creator to return a function instead of an action
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger, thunk])

})

export default store