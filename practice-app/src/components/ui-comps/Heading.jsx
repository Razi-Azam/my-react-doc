import React from 'react'

function Heading({children}) {
  return (
    <div className='text-gray-950 font-bold my-2 text-3xl w-auto h-auto p-8'>
        {children}
    </div>
  )
}

export default Heading