import React from 'react'

function Container({children}) {
  return (
    <div className='border border-spacing-2 border-slate-950 rounded-sm bg-slate-300 w-auto mt-4'>
        {children}
    </div>
  )
}

export default Container