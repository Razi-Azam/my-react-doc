import React, { useEffect, useState } from 'react'
import Button from '../ui-comps/Button'
import useDocumentTitle from './01myHooks/useDocumentTitle'


function DocTitleTwo() {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     document.title = `Count ${count}`
    // }, [count])

    //custom hook
    useDocumentTitle(count)

  return (
    <div>
        <Button handleClick={() => setCount(count + 1)}>Count - {count}</Button>
    </div>
  )
}

export default DocTitleTwo