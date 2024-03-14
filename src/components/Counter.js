import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // })

        this.setState((prev) =>({
            count: prev.count + 1
        }))
    }

    incrementFayb() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>
                    Counter dawg - {this.state.count}
                </div>
                <button onClick={() => this.incrementFayb()}>Increment</button>
            </div>

        )
    }
}

export default Counter