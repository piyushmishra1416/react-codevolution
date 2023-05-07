import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name: 'vishwas'
     }
   //   console.log('LifecycleA constructor')
   }
   // static getDerivedStateFromProps(props,state) {
   //    console.log('LifecycleA getDerivedStateFromProps')
   //    return null
   // }
   componentDidMount(){
      console.log('LifecycleA componentdidmount')
   }
  render() { 
   // console.log('LifecycleA render')
   return  (
   <div>
   //    <div>LifecycleA</div>
   {/* //    <LifecycleB/> */}
   //    </div>
      //  <div>LifecycleA</div>
    ) 
  }
}

export default LifecycleA