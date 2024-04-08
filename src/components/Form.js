import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      message: 'Hello',
      username: '',
      comments: '',
      topic:'React'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }
  handleTopicChange = event =>{
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit () {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
  }
  // helloBois () {
  //   if(this.state.message==='Hello'){
  //     this.setState({message:'Goodbye'})
  // }else{
  //     this.setState({message:'Hello'})
  // }
  // }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
        {/* <button onClick={this.helloBois}>Clickkkk</button> */}
          <label>Username</label>
          <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
        </div>
        <div>
          <label>
            Comments
          </label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value='react'>React</option>
            <option value='vue'>Vue</option>
            <option value='angular'>Angular</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
