import React, { useEffect, useRef } from 'react'
import Input from '../ui-comps/Input'

function FocusINput() {
    const inputRef = useRef(null)

    useEffect(() => {
        //focus the input element
        //here, React will set the ref's current property 
        //to the corresponding DOM node
        inputRef.current.focus()
    }, [])

  return (
    <div>
        <Input 
            inputType={'text'}
            inputRef={inputRef}
        />
    </div>
  )
}

export default FocusINput