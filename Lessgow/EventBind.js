import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler(){
    console.log("this",this.state)
    if(this.state.message==='Hello'){
        this.setState({message:'Goodbye'})
    }else{
        this.setState({message:'Hello'})
    }
    
  }
  
  
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Clickkkk</button>
      </div>
    )
  }
}

export default EventBind
