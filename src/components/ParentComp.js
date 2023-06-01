import React, { PureComponent } from 'react'
import RegularComponent from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends PureComponent {

   constructor(props) {
     super(props)
   
     this.state = {
       name : 'Vishwas'
     }
   }
   componentDidMount() {
      setInterval(() => {
         this.setState({
            name : 'Vishwas'
         })
      } )
   }
  render() {
   console.log('********Parent component render************')
    return (
      <div>ParentComp
         {/* <RegularComponent name={this.state.name} />
         <PureComp name={this.state.name} /> */}
         <MemoComp name = {this.state.name}/>
      </div>
    )
  }
}

export default ParentComp