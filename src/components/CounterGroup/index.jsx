import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalNumber: 0,
            numbers: []
        };
    }

    handleResize = (event) => {
        const size = event.target.value && parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0;
        this.setState({
            size: size,
            totalNumber: 0,
            numbers: new Array(size).fill(0)
        });
    }

    handleIncrease = (key) => {
        const numbersChanged = this.state.numbers
        numbersChanged[key] = numbersChanged[key] + 1
        this.setState((preProps) => ({
            totalNumber: preProps.totalNumber + 1,
            numbers: numbersChanged
        }))
    }

    handleDecrease = (key) => {
        const numbersChanged = this.state.numbers
        numbersChanged[key] = numbersChanged[key] - 1
        this.setState((preProps) => ({
            totalNumber: preProps.totalNumber - 1,
            numbers: numbersChanged
        }))
    }

    render() {
        const counters = [...Array(this.state.size).keys()]
        return (
            <div>
                <div>
                    <label>Group Size: </label>
                    <input onBlur={this.handleResize} type="number" min="0"/>
                </div>
                <div>
                    <label>Total Number: {this.state.totalNumber}</label>
                </div>
                {
                    counters.map(key => <Counter onIncrease={() => this.handleIncrease(key)}
                        onDecrease={() => this.handleDecrease(key)} key={key} value={this.state.numbers[key]} />)
                }
            </div>
        );
    }

}

export default CounterGroup;
