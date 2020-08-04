import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import { increaseTotalNumber, decreaseTotalNumber, resetTotalNumber } from "../../actions";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    componentWillUnmount() {
        this.props.resetTotalNumber(this.state.value);
    }

    increase = () => {
        this.setState((preProps)=> ({
            value: preProps.value + 1
        }))
        console.log(this.props.increaseTotalNumber())
        this.props.increaseTotalNumber();
    }

    decrease = () => {
        this.setState((preProps)=> ({
            value: preProps.value - 1
        }))
        this.props.decreaseTotalNumber();
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <mark>{this.state.value}</mark>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }

}

export default connect(null, { increaseTotalNumber, decreaseTotalNumber, resetTotalNumber })(Counter);
