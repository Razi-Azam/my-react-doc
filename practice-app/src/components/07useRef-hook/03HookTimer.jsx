import React, { useEffect, useRef, useState } from 'react'
import Button from '../ui-comps/Button'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevState => prevState + 1)
        }, 1000)

        //cleanup function
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

  return (
    <div>
        Hook Timer - {timer}
        <Button
            handleClick={() => clearInterval(intervalRef.current)}
        >
        Clear Hook Timer
        </Button>
    </div>
  )
}

export default HookTimer