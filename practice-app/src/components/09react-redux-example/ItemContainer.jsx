import React from 'react'
import { connect } from 'react-redux'
import Heading from '../ui-comps/Heading'
import Container from '../ui-comps/Container'
import { buyCakes, buyIceCream } from '../../redux'
import Button from '../05useCallback-hook/Button'

function ItemContainer(props) {
  return (
    <Container>
        <Heading><h2>Item - {props.item} </h2></Heading>
        <Button handleClick={props.buyItem}>Buy Items</Button>
    </Container>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
        ? state.cake.numOfCakes
        : state.iceCream.numOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () =>  dispatch(buyCakes())
    : () => dispatch(buyIceCream())

    return {
      buyItem: dispatchFunction
    }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(ItemContainer)