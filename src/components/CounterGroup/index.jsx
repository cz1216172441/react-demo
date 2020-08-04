import React from 'react'
import Counter from '../Counter'
import { connect } from 'react-redux';

class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0
        };
    }

    handleResize = (event) => {
        const size = event.target.value && parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0;
        this.setState({
            size: size
        });
    }

    render() {
        const counters = [...Array(this.state.size).keys()]
        return (
            <div>
                <div>
                    <label>Group Size: </label>
                    <input onBlur={this.handleResize} type="number" min="0" />
                </div>
                <div>
                    <label>Total Number: {this.props.sum}</label>
                </div>
                {
                    counters.map(key => <Counter key={key} />)
                }
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { sum: state.counter.sum };
}

export default connect(mapStateToProps)(CounterGroup)
