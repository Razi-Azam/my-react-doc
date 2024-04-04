//using useContext hook, we will using the data from the
//App component to CompB

import React from 'react'
import { UserContext } from '../../../App'

function CompB() {
  return (
    <div className='text-gray-950 my-2 text-3xl bg-slate-300 w-40 h-20 p-8'>
        <UserContext.Consumer>
            {
                userName => <h1>{userName}</h1>
            }
        </UserContext.Consumer>
    </div>
  )
}

export default CompB