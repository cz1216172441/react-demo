import React from 'react'
import Counter from '../Counter'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalNumber: 0
        };
    }

    handleResize = (event) => {
        this.setState({
            size: event.target.value && parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0
        });
    }

    handleTotalNumberIncreased = () => {
        this.setState((preProps) => ({
            totalNumber: preProps.totalNumber + 1
        }))
    }

    handleTotalNumberDecreased = () => {
        this.setState((preProps) => ({
            totalNumber: preProps.totalNumber - 1
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
                    counters.map(key => <Counter onIncrease={this.handleTotalNumberIncreased} 
                        onDecrease={this.handleTotalNumberDecreased} key={key} />)
                }
            </div>
        );
    }

}

export default CounterGroup;
