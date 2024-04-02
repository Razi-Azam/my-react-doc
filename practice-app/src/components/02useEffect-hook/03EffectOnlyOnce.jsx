/* this demonstrate the useEffect hook should runs only once */
import React, { useEffect, useState } from 'react'

function EffectOnlyOnce() {
    const [mousePos, setMousePos] = useState({
        x: 0,
        y: 0
    })

  const logMousePosition = (e) => {
    console.log("Mouse event")
    setMousePos({
        x: e.clientX,
        y: e.clientY
    })
  }

  useEffect(() => {
    console.log("useEffect called")
    window.addEventListener('mousemove', logMousePosition)

    //cleanup function to cancel all events or subscriptions
    return () => {
        console.log('component unmounted')
        window.removeEventListener('mousemove', logMousePosition)
    }

  }, []) //pass an empty array as dependency to tell useeffect not to re-render everytime

  return (
    <div className='text-4xl text-lime-950 bg-slate-100 p-10'>
        <h1>Hooks: X - {mousePos.x} Y - {mousePos.y} </h1>
    </div>
  )
}

export default EffectOnlyOnce