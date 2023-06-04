import React, { Component, useReducer } from 'react'
import axios from 'axios'

 class PostForm extends Component {
   constructor(props) {
      super(props)
    
      this.state = {
       userId : '',
       title : '',
       body : ''
      }
    }
   //  componentDidMount() {
   //     axios.get('https://jsonplaceholder.typicode.com/comments')
   //     .then(response => {
   //        // console.log(response)
   //        this.setState({posts: response.data})
   //     })
   //     .catch(error => {
   //        console.log(error)
   //        this.setState({errorMsg: 'Error retrieving data'})
   //     })
   //  }

    changeHandler = e => {
      this.setState({[e.target.name]: e.target.value })
    }
submitHandler = e => {
   e.preventDefault()
   console.log(this.state)
   axios.post('https://jsonplaceholder.typicode.com/posts')
   .then(response => {
             console.log(response)
             
          })
          .catch(error => {
             console.log(error)
         
          })
}


  render() {
   const { userId, title, body } = this.state
    return (
      <div>
         <form onSubmit={this.submitHandler}>
            <div>
               <input type='text' name='userId' value = {userId} onChange={this.changeHandler} />
            </div>
            <div>
               <input type='text' name='title' value = {title} onChange={this.changeHandler}  />
            </div>
            <div>
               <input type='text' name='body' value = {body} onChange={this.changeHandler}  />
            </div>
            <button type='submit'>Submit</button>
         </form>
         
         </div>
    )
  }
}

export default PostForm