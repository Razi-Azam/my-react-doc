import React, {useReducer} from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            state
    }
}

function MultipleReducers() {

    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h1 className='text-3xl text-gray-950 font-bold mb-4'>Count - {count}</h1>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-auto px-4'
            onClick={() => dispatch('increment')}
        >Increment
        </button>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-auto px-2 mx-2'
            onClick={() => dispatch('decrement')}
        >Decrement
        </button>
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-20 px-2'
            onClick={() => dispatch('reset')}
        >Reset
        </button>
    </div>
  )
}

export default MultipleReducers