import React from 'react'

function Button({handleClick, children}) {
    console.log("Rendering button - ", children)
  return (
    <button 
      className='border border-gray-950 bg-slate-500 text-white w-auto px-4 mx-2 mt-2 mb-2'
      onClick={handleClick}
    >
        {children}
    </button>
  )
}

export default React.memo(Button)