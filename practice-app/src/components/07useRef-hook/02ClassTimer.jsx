import React, {Component} from 'react'
import Button from '../ui-comps/Button'

class ClassTimer extends Component {
    //create an instance field or a class property which will point to the interval timer
    interval
    constructor(props) {
        super(props)

        this.state = {
            timer: 0
        }
    }

    //set the interval timer
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState(prevState => ({timer: prevState.timer + 1}))
        }, 1000)
    }

    //clear the timer
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                Class Timer - {this.state.timer}
                <Button 
                    handleClick={() => clearInterval(this.interval) }
                    >Clear Timer
                </Button>
            </div>
        )
    }
}

export default ClassTimer