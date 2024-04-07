import React from 'react'

function Title() {
    console.log("Rendering Title")
  return (
    <div className='text-4xl text-lime-800  p-5 mb-2'>
        useCallback Hook
    </div>
  )
}

export default React.memo(Title)