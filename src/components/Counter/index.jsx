import React from 'react'
import './index.css'
import { connect } from 'react-redux'
import { increaseTotalNumber, decreaseTotalNumber } from "../../actions";

class Counter extends React.Component {

    increase = () => {
        this.props.onIncrease();
        this.props.increaseTotalNumber();
    }

    decrease = () => {
        this.props.onDecrease();
        this.props.decreaseTotalNumber();
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>-</button>
                <mark>{this.props.value}</mark>
                <button onClick={this.increase}>+</button>
            </div>
        );
    }

}

export default connect(null, { increaseTotalNumber, decreaseTotalNumber })(Counter);
