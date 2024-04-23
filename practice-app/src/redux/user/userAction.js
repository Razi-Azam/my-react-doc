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