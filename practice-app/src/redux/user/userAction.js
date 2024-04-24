import axios from "axios"
import { 
    FETCH_USERS_FAILURE,
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS 
} from "./userTypes"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserfailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

//define a function for fetching users from an api
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errorMessage = error.message
            dispatch(fetchUserfailure(errorMessage))
        })
    }
}