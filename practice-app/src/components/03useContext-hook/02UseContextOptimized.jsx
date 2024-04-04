//this is the optimzed way of consuming the Context
//but providing the context will be the same as we have done in previous example

import React from 'react'
import CompC from './child-components/CompC'

function UseContextOptimized() {
  return (
    <div>
        <CompC />
    </div>
  )
}

export default UseContextOptimized