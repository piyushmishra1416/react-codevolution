import React from 'react'

function Person({person}) {
  return (
 <React.Fragment><h3>I am {person.name} with an exp.{person.age} years of protecting the DC world.</h3></React.Fragment>
  )
}

export default Person