import React, { Component } from 'react'

class LifecycleB extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Dog'
    }
    console.log('LcycleB const')
  }
  static getDerivedStateFromProps(props,state){
    console.log("LcycleB getDerivedStateFromProps")
    return null
  }
  componentDidMount(){
    console.log('LcyleB componentdid mount')
  }
  shouldComponentUpdate(){
    console.log('Lcyle B shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Lcyle B getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('Lcyle B componentDidUpdate')
  }
  
    render() {
        console.log('LcycleB render')
    return (
      <div>
        LcycleB
      </div>
    )
  }
}

export default LifecycleB
