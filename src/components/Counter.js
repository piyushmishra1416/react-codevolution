import React, { Component } from 'react'

export class Counter extends Component {
   constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    incrementCount = () => {
       this.setState(prevstate => {
          return { count : prevstate.count + 1}
       })
    }

  render() {
   const {count} = this.props
    return (
      <div>
         {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default Counter