//for multiple reducers like both cake and icecream reducers
import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./iceCream/iceCreamReducers";
//combine userReducer
import { userReducer } from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer //add the third key value pair
})

export default rootReducer