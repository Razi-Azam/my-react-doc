//this component removes the EffectOnlyOnce when the button is clicked
//due to which there will a warning of memoery leak becuase the mouse event will still runnning
//to resolve this, we need to clear or remove all subscriptions or tasks in the  cleanup fucntion inside the useEffect hook
//added the cleanup function in the EffectOnlyOnce component

import React, { useState } from 'react'
import EffectOnlyOnce from './03EffectOnlyOnce'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-40 px-2 py-4 mb-4'
            onClick={() => setDisplay(!display)}>Toggle display
        </button>
        {display && <EffectOnlyOnce />}
    </div>
  )
}

export default MouseContainer