import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class ClickCounter extends Component {

  render() {
   const {count, incrementCount} = this.props
   if(count!=10){
    return (
      <div>
       
         <button onClick={incrementCount}> Clicked {count} times.</button>
      </div>
    )}
    else {
      return (<div> Time's Up</div>)
    }
  }
}

export default UpdatedComponent(ClickCounter, 20)