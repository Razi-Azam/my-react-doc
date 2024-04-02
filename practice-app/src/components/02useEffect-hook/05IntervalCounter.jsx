import React, { useState, useEffect } from 'react'

function IntervalCounter() {
    const [count, setCount] = useState(0)

    useEffect(() => {

        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval)
        }

    }, [count])

    const tick = () => {
        //using this approach, we dont need to pass count as dependency in the useEffect
        //setCount(prevCount => prevCount + 1)

        //but if we do it, then in this case we have to pass count as dependency in the useEffect
        setCount(count + 1)
    }

  return (
    <div className='text-4xl text-lime-950 bg-slate-100 p-10'>
        <h1>{count}</h1>
    </div>
  )
}

export default IntervalCounter