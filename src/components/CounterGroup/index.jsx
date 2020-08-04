import React from 'react'
import Counter from '../Counter'
import { connect } from 'react-redux';
import { resetTotalNumber } from './../../actions'

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            numbers: []
        };
    }

    handleResize = (event) => {
        const size = event.target.value && parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0;
        this.setState({
            size: size,
            numbers: new Array(size).fill(0)
        });
        this.props.resetTotalNumber()
    }

    handleIncrease = (key) => {
        const numbersChanged = this.state.numbers
        numbersChanged[key] = numbersChanged[key] + 1
        this.setState({
            numbers: numbersChanged
        })
    }

    handleDecrease = (key) => {
        const numbersChanged = this.state.numbers
        numbersChanged[key] = numbersChanged[key] - 1
        this.setState({
            numbers: numbersChanged
        })
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
                    <label>Total Number: {this.props.totalNumber}</label>
                </div>
                {
                    counters.map(key => <Counter onIncrease={() => this.handleIncrease(key)}
                        onDecrease={() => this.handleDecrease(key)} key={key} value={this.state.numbers[key]} />)
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { totalNumber: state.totalNumber };
}

export default connect(mapStateToProps, { resetTotalNumber })(CounterGroup)
