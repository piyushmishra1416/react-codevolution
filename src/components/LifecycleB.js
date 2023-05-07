import React, { Component } from 'react'

 class LifecycleB extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name: 'vishwas'
     }
     console.log('LifecycleB constructor')
   }
   static getDerivedStateFromProps(props,state) {
      console.log('LifecycleB getDerivedStateFromProps')
      return null
   }
   componentDidMount(){
      console.log('LifecycleB componentdidmount')
   }
  render() { 
   console.log('LifecycleB render')
    return (
      <div>Lifecycle B</div>
    ) 
  }
}

export default LifecycleB