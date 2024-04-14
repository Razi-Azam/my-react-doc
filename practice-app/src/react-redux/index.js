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

const initialState = {
    numOfCakes: 10,
    numOfIceCreams: 20,
}

/* =============================== REDUCER ==================================== */

//reducer function to update the state
//It is a pure function that accepts state and action as arguments and returns 
//the next state of an application
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                //here, the obejct may contain more than one properties,
                //so first make a copy of the object by using spread operator and then
                //make change in the specifc property
                ...state, //make a copy of the state object and then only update the number of cakes
                numOfCakes: state.numOfCakes - 1 //not mutating the object but return a new object
            }

            case BUY_ICECREAM: 
            return {
                ...state, 
                numOfIcecreams: state.numOfIceCreams - 1
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

const store = createStore(reducer)

 */

//New way of creating a store
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: reducer, //or just reducer
});


//Responsibility 2: Allows acces to state via getState()
console.log('Initial state', store.getState())

//Responsibility 2: Allows the app to subscribe the changes in the store
const unsubscribe = store.subscribe(() => console.log('Updated state ', store.getState()))

//Responsibility 3: Provides a dispatched method to update the state
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


//Responsibility 4: Unsubscribe from the store
unsubscribe()