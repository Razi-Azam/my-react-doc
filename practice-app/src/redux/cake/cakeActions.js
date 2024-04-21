import { BUY_CAKE } from "./cakeTypes"

//since the same action creator is used in other component as well
//where the deafult value is 1 so here, we will assign a default value 
export const buyCakes = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}