import { configureStore, applyMiddleware } from '@reduxjs/toolkit'
import {thunk} from 'redux-thunk'
import axios from 'axios'

//State
const initialState = {
    loading: false,
    users: [],
    error: ''
}

//Action types
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//Action creators
const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//Reducer function
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }

}

//async action creators
//so an action creator returns actions
//But middleware like redux-thunk has the ability to return a function instead of actions
//here, redux-thunk allows to return a function
const fetchUsers = () => {
    //the returned function receives a dipatch method as its argument
    return function(dispatch) {
        //diapatch an action
        dispatch(fetchUsersRequest())

        //make an API call using axios
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //response.data is the array of users
                //uses map to return only id of the users
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                //error.message is the error description
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

//Now, create a redux store
const store = configureStore({
    reducer,
    applyMiddleware: applyMiddleware(thunk)
})

//subscribe to the store
store.subscribe(() => {console.log(store.getState())})

//dispatch the asynchronous action creators
store.dispatch(fetchUsers())