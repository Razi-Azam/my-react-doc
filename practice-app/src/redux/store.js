import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from './cake/cakeReducer';

const store = configureStore({
    reducer: cakeReducer
})

export default store