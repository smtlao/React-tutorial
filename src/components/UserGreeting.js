import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // if(this.state.isLoggedIn){
        //     return <div>Welcome Dag</div>
        // } else {
        //    return <div>Welcome not Dawg</div>
        // }
        return (
            this.state.isLoggedIn ? <div>Welcome Dawg</div> : <div>Welcome not Dawg</div>
        )
    }
}

export default UserGreeting
