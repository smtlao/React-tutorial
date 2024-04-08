import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        alert("clicked button bro")
    }
  render() {

    return (
      <div>
        <button onClick={this.clickHandler}>Click me daawg</button>
      </div>
    )
  }
}

export default ClassClick
