import React from 'react'

function Input({inputType, inputRef, inputValue, onChangeHandler}) {
  return (
    <input
        className='border border-gray-400
                bg-slate-200 text-gray-950 
                w-auto px-4 my-2 mx-2'
        type={inputType}
        ref={inputRef}
        value={inputValue}
        onChange={onChangeHandler} 
    />
  )
}

export default Input