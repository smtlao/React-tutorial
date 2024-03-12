import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome Big Dawg!'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks Big Dawg!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Click this Big Dawg</button>
            </div>
            )

    }
}

export default Message