import React, { useState } from 'react'

function WithPrevState() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
      for(let i = 0; i < 5; i++) {
        // setCount(count + 1) //Bug: shows 1 everytime the button is clicked because the count is not incremented based on the previous value.
        setCount(prev => prev + 1) // increment by 1 beucase the count uses the prev value to make increment
      }
    }

  return (
    <div>
        <p className='text-3xl text-gray-950 font-bold'>Count: {count}</p>
        <div className='pt-4'>
            <button 
              className='border border-gray-950 bg-slate-500 text-white w-20 px-2'
              onClick={() => setCount(initialCount)}
            >Reset
            </button>

            <button 
              className='border border-gray-950 bg-slate-500 text-white w-auto px-4 mx-2'
              onClick={() => setCount(prev => prev + 1)}
            >Increment
            </button>

            <button 
              className='border border-gray-950 bg-slate-500 text-white w-auto px-4'
              onClick={() => setCount(prev => prev - 1)}
            >Decrement
            </button>

            <button 
              className='border border-gray-950 bg-slate-500 text-white w-auto px-4 mx-2'
              onClick={incrementFive}
            >Increment Five
          </button>
        </div>
    </div>
  )
}

export default WithPrevState