import React, { Component } from "react";

class Usergreetings extends Component {
 
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedIn: true
     }
   }
   render () {
      
      return this.state.isLoggedIn && <div> Welcome Ghosh</div>

      // conditional operator
//       return (
// this.state.isLoggedIn ?
// <div>Welcome Mosh</div> :
// <div>Welcome Guest</div>

//       )






//       let message 
//       if(this.state.isLoggedIn) {
//          message =<div> Welcome mosh</div>
//       } else {
//          message = <div>Welcome Guest</div>
//       }

// return <div> {message}</div>



      // if else normal
      // if (this.state.isLoggedIn) {
      //    return (
      //       <div> 
      //          Welcome Mosh
      //       </div>
      //    )
      // } else {
      //    return (
      //       <div> 
      //          Welcome Guest
      //       </div>

      //    )
      // }
   }}
//   return (

//         <>
//         <div>Welcome Vishwas</div>
//         <div> Welcone Guest </div>
//         </>
  

//     );
//     }}


export default Usergreetings;
