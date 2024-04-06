import React, {useContext} from 'react'
import { CountContext } from '../../../App'

function CompA() {
    const countContext = useContext(CountContext)
  return (
    <div>
        <h1 className='text-3xl text-gray-950 font-bold mb-4'>Counter A - {countContext.countState}</h1>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-auto px-4'
            onClick={() => countContext.countDispatch('increment')}
        >Increment
        </button>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-auto px-2 mx-2'
            onClick={() => countContext.countDispatch('decrement')}
        >Decrement
        </button>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-20 px-2'
            onClick={() => countContext.countDispatch('reset')}
        >Reset
        </button>
    </div>
  )
}

export default CompA