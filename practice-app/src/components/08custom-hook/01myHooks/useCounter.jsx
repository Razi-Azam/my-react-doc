//creating a custom hook to separate counter logic

import {useState} from 'react'

//the default value 0 will be used if nothing is passed as an argument
function useCounter(initialCount = 0, value) {
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialCount)
    }

    //returns an array of variables and functions
    return [count, increment, decrement, reset]
}

export default useCounter