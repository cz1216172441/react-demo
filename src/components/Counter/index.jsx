import React from 'react'
import './index.css'

class Counter extends React.Component {

    increase = () => {
        this.props.onIncrease();
    }

    decrease = () => {
        this.props.onDecrease();
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

export default Counter;
