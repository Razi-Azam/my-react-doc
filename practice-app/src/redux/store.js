import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './cake/cakeReducer';
//for multiple reducers
import rootReducer from './rootReducer';

//for dsingle reducer
// const store = configureStore({
//     reducer: cakeReducer
// })

//for multiple reducers
const store = configureStore({
    reducer: rootReducer
})

export default store