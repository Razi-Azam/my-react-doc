import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            state
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
        <h2 className='text-3xl text-gray-950 font-bold mb-4'>First Counter - {count.firstCounter}</h2>
        <h2 className='text-3xl text-gray-950 font-bold mb-4'>Second Counter - {count.secondCounter}</h2>
        
        <button 
            className='border border-gray-950 bg-slate-500 text-white w-auto px-4'
            onClick={() => dispatch({type: 'increment', value: 1})}
        >Increment 1
        </button>

        <button 
            className='border border-gray-950 bg-slate-500 text-white w-auto px-2 mx-2'
            onClick={() => dispatch({type: 'decrement', value: 1})}
        >Decrement 1
        </button>

        <button 
        className='border border-gray-950 bg-slate-500 text-white w-auto px-4'
        onClick={() => dispatch({type: 'increment', value: 5})}
        >Increment 5
        </button>

        <button 
            className='border border-gray-950 bg-slate-500 text-white w-auto px-2 mx-2'
            onClick={() => dispatch({type: 'decrement', value: 5})}
        >Decrement 5
        </button>

        <div className='my-2'>
            <button 
                className='border border-gray-950 bg-slate-500 text-white w-auto px-4'
                onClick={() => dispatch({type: 'increment2', value: 1})}
            >Increment Second Counter
            </button>

            <button 
                className='border border-gray-950 bg-slate-500 text-white w-auto px-2 mx-2'
                onClick={() => dispatch({type: 'decrement2', value: 1})}
            >Decrement Second Counter
            </button>
        </div>

        <button 
            className='border border-gray-950 bg-slate-500 text-white w-20 px-2 my-2'
            onClick={() => dispatch({type: 'reset'})}
        >Reset
        </button>
    </div>
  )
}

export default CounterTwo