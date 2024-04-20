import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Heading from '../ui-comps/Heading'
import Button from '../ui-comps/Button'
import { buyCakes } from '../../redux'
import Container from '../ui-comps/Container'

function DispatchCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <Container>
        <p>useDispatch</p>
        <Heading><h2>Number of cakes - {numOfCakes} </h2></Heading>
        <Button handleClick={() => dispatch(buyCakes())}>Buy Cake</Button>
    </Container>
  )
}

export default DispatchCakeContainer