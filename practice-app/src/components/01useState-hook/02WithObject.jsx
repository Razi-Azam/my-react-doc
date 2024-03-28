import React, { useState } from 'react'

function WithObject() {
    //a usestate hook with a default value object
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })

  return (
    <form className='border border-gray-950 bg-gray-400 w-96 py-10'>
        <input type="text"
            className='border border-gray-950 bg-slate-200 text-gray-950 w-auto px-4 mx-2'
            value={name.firstName}
            // onChange={(e) => setName({firstName: e.target.value})} Error: here, useState hook will not merge the state
            onChange={(e) => setName({...name, firstName: e.target.value})} //spread the name the set the name property using spread operator to manual merge
        />
        <input type="text"
            className='border border-gray-950 bg-slate-200 text-gray-950 w-auto px-4 my-2 mx-2'
            value={name.lastName}
            onChange={(e) => setName({...name, lastName: e.target.value})}
        />
        <h2 className='text-gray-950 my-2 text-xl'>Your firs name is: {name.firstName}</h2>
        <h2 className='text-gray-950 text-xl'>Your last name is: {name.lastName}</h2>
    </form>
  )
}

export default WithObject   