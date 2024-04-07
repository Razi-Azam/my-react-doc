import React from 'react'

function Count({text, count}) {
    console.log(`Rendering ${text}`)
  return (
    <div className='text-4xl text-lime-950 bg-slate-100 p-10 mb-2'>
        {text} - {count}
    </div>
  )
}

export default React.memo(Count)