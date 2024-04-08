import React, { isValidElement, useMemo, useState } from 'react'
import Button from '../ui-comps/Button'

function Counter() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const incrementOne = () => {
        setCountOne(countOne + 1)
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1)
    }

    // const isEven = () => {
    //     let i = 0
    //     while(i < 2000000000) i++
    //     return countOne % 2 === 0
    // }

    const isEven = useMemo(() => {
        let i = 0
        while(i < 2000000000) i++
        return countOne % 2 === 0
    }, [countOne])

  return (
    <div>
        <div>
            <Button handleClick={incrementOne}>Count One - {countOne}</Button>
          { /* <span>{isEven() ? ' Even' : ' Odd'}</span> */}
            <span>{isEven ? ' Even' : ' Odd'}</span>
        </div>
        <div>
            <Button handleClick={incrementTwo}>Count Two - {countTwo}</Button>
        </div>
    </div>
  )
}

export default Counter