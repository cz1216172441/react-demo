import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { value: 0 }
    }

    increase = () => {
        this.setState((preProps) => ({
            value: preProps.value + 1
        }));
    }

    decrease = () => {
        this.setState((preProps) => ({
            value: preProps.value - 1
        }))
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

export default Counter;
