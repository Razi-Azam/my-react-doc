import React, { useState } from 'react'
import Button from '../ui-comps/Button'
import useCounter from './01myHooks/useCounter'

function CounterOne() {
    // const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // const decrement = () => {
    //     setCount(prevCount => prevCount - 1)
    // }

    // const reset = () => {
    //     setCount(0)
    // }
    //the first argument is the initialCount and the second is the value
    const [count, increment, decrement, reset] = useCounter(0, 1)

  return (
    <div>
        <p className='text-3xl text-gray-950 font-bold'>Count: {count}</p>
        <div className='pt-4'>
            <Button handleClick={increment}>Increment</Button>
            <Button handleClick={decrement}>decrement</Button>
            <Button handleClick={reset}>reset</Button>
        </div>
    </div>
  )
}

export default CounterOne