import React, { useState } from 'react'
import Input from '../ui-comps/Input'
import Button from '../ui-comps/Button'
import useInput from './01myHooks/useInput'

function UserForm() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    //using a custom hook
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')


    // const submitHandler = (e) => {
    //     e.preventDefault()
    //     alert(`hello ${firstName} ${lastName}`)
    // }

    //using custom hook
    const submitHandler = (e) => {
        e.preventDefault()
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First name</label>
                <Input inputType={'text'} 
                        inputValue={bindFirstName.value} 
                        onChangeHandler={bindFirstName.onChange} 
                />
            </div>
            <div>
                <label>Last name</label>
                <Input inputType={'text'} 
                inputValue={bindLastName.value} 
                onChangeHandler={bindLastName.onChange} 
                />
            </div>
            <Button>Submit</Button>
        </form>
    </div>
  )
}

export default UserForm