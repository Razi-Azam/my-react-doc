import React, { useEffect, useState } from 'react'
import Button from '../ui-comps/Button'


function DocTitleOne() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])

  return (
    <div>
        <Button handleClick={() => setCount(count + 1)}>Count - {count}</Button>
    </div>
  )
}

export default DocTitleOne