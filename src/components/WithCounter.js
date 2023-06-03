import React from 'react'

const UpdatedComponent = (OriginalComponent, countBy) => {

   class NewComponent extends React.Component {
     
      constructor(props) {
         super(props)
       
         this.state = {
             count : 0
         }
       }
       incrementCounter = () => {
          this.setState(prevState => {
             return { count : prevState.count + countBy}
          })
       }
       
      render () {
         return(  <OriginalComponent count = {this.state.count} incrementCount = {this.incrementCounter}/> )
      }
   }
   return NewComponent
}
export default UpdatedComponent