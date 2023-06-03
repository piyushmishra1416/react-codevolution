import React, { Component } from 'react'

export class ClickCountertwo extends Component {

  render() {
   const {count,incrementCount} = this.props
    return (
      <div>
         <button onClick={incrementCount}> Clicked {count} times.</button>
      </div>
    )
  }
}

export default ClickCountertwo