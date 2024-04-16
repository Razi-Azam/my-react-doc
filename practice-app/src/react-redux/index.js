//New way of creating a store
import { configureStore  } from '@reduxjs/toolkit'
//for multiple reducers
import { combineReducers } from '@reduxjs/toolkit'
//import middleware
import { applyMiddleware } from 'redux'
//import redux logger
import logger from 'redux-logger'; 



/* =============================== ACTION ==================================== */
//an action is an object with a type property

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

//Reducer:
//(previousState, action) => newState

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20,
// }

//create a separate state for cakes
const initialCakeState = {
    numOfCakes: 10
}

//create a separate state for ice creams
const initialIceCreamState = {
    numOfIceCreams: 20
}

/* =============================== REDUCER ==================================== */

//reducer function to update the state
//It is a pure function that accepts state and action as arguments and returns 
//the next state of an application
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case BUY_CAKE: 
//             return {
//                 //here, the obejct may contain more than one properties,
//                 //so first make a copy of the object by using spread operator and then
//                 //make change in the specifc property
//                 ...state, //make a copy of the state object and then only update the number of cakes
//                 numOfCakes: state.numOfCakes - 1 //not mutating the object but return a new object
//             }

//             case BUY_ICECREAM: 
//             return {
//                 ...state, 
//                 numOfIcecreams: state.numOfIceCreams - 1
//             }

//         default:
//             return state
//     }
// }

//Now, creating a separate reducer for cakes
const cakeRedcuer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }

        default:
            return state
    }
}

//creating a separate reducer for icecreams
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        default:
            return state
    }
}

/* =============================== STORE ==================================== */


//Responsibility 1: Holding the application state
/* @deprecated 
since createSTore is deprecated so it is recommended to import using alias
import { legacy_createStore as createStore } from 'redux';
import { logger } from 'redux-logger';

const store = createStore(reducer)

 */

const rootReducer = combineReducers({
    cake: cakeRedcuer,
    iceCream: iceCreamReducer
})

//create a middleware and pass the logger
const middleWare = applyMiddleware(logger);

//passed 'rootReducer'a s value to the reducer
const store = configureStore({
    reducer: rootReducer,
    middleWare,
});

   
//Responsibility 2: Allows acces to state via getState()
console.log('Initial state', store.getState())

//Responsibility 2: Allows the app to subscribe the changes in the store
// const unsubscribe = store.subscribe(() => console.log('Updated state ', store.getState()))

//since logger is added as middleware, so remove the console from above
const unsubscribe = store.subscribe(() => {})

//Responsibility 3: Provides a dispatched method to update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


//Responsibility 4: Unsubscribe from the store
unsubscribe()

