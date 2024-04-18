import React from 'react'
import { useSelector } from 'react-redux'
import Heading from '../ui-comps/Heading'
import Button from '../ui-comps/Button'
import Container from '../ui-comps/Container'

function HookCakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes)
  return (
    <Container>
      <p>useSelector Hook</p>
      <Heading><h2>Number of cakes - {numOfCakes} </h2></Heading>
    </Container>
  )
}

export default HookCakeContainer