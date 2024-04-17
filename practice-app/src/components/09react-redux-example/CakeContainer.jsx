import React from 'react'
//to connect the mapStatetoProps and mapDispatchToProps to the CakeContainer component
import { connect } from 'react-redux'
import Heading from '../ui-comps/Heading'
import Button from '../ui-comps/Button'
import { buyCakes } from '../../redux'

//this props is mapped to the state of the store and action creators
function CakeContainer(props) {
  return (
    <div>
        <Heading><h2>Number of cakes - {props.numOfCakes}</h2></Heading>
        <Button handleClick={props.buyCakes}>Buy Cake</Button>
    </div>
  )
}

//define a new function named mapStatetoProps
//this function takes the state as paramater and retruns an object
//in this function, the state from the redux store is mapped to our component props
const mapStatetoProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

//this function maps dispatch of our action creators to a prop in our component
const mapDispatchToProps = dispatch => {
    return {
        buyCakes: () => dispatch(buyCakes())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(CakeContainer)