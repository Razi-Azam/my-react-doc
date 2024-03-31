import React, {useEffect, useState} from 'react'

function UseEffectAfterRender() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You Clicked ${count} times.`
    })

  return (
    <div>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-30 px-2'
            onClick={() => setCount(count + 1)}>Click {count} times
        </button>
    </div>
  )
}

export default UseEffectAfterRender