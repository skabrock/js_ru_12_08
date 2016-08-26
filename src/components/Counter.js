import React, { Component, PropTypes } from 'react'
import store from '../store'
import { increment } from '../AC/counter'

class Counter extends Component {
    static propTypes = {

    };

    state = {
        count: store.getState().count
    }

    componentWillMount() {
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange = () => {
        this.setState({
            count: store.getState().count
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <a href = "#" onClick = {this.handleIncrement}>increment me</a>
            </div>
        )
    }

    handleIncrement = ev => {
        ev.preventDefault()
        const action = increment()
        store.dispatch(action)
    }
}

export default Counter