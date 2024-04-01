import React, { useState, useEffect } from 'react'

function WithCondition() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `You Clicked ${count} times.`
        
        //without including "count" as dependency, there will be unnecessary rerenders
        console.log("Document title is updating") //unnecessary rerenders: renders everytime when the texxt is entered in the inpit field without button clcik
    }, [count])

  return (
    <div>
        <input
            type="text"
            className='border border-gray-950 bg-slate-200 text-gray-950 w-auto px-4 my-2 mx-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-30 px-2'
            onClick={() => setCount(count + 1)}>Click {count} times
        </button>
    </div>
  )
}

export default WithCondition