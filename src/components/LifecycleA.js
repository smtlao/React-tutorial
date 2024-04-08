import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Dog'
    }
    console.log('LcycleA const')
  }
  static getDerivedStateFromProps(props,state){
    console.log("LcycleA getDerivedStateFromProps")
    return null
  }
  componentDidMount(){
    console.log('Lcyle A componentdid mount')
  }
  shouldComponentUpdate(){
    console.log('Lcyle A shouldComponentUpdate')
    return true
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Lcyle A getSnapshotBeforeUpdate')
    return null
  }
  componentDidUpdate(){
    console.log('Lcyle A componentDidUpdate')
  }
  changeState = () => {
    this.setState({
        name:'Dawg evolution'
    })
  }
  
    render() {
        console.log('LcycleA render')
    return (
      <div>
        LcycleA
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB/>
      </div>
    )
  }
}

export default LifecycleA
