import React, { Component } from 'react'
import Person from './Person'

// Lists and Keys
// A "key" is a special string attribute you need to include when creating lists of elements.
// Keys give the elements a stable identity.
// Keys help React identify which items have changed, are added, or are removed.
// Help in efficient update of the user interface.

function NameList() {
   // const names = ['Bruce', 'Clark', 'Diana']
   // const nameList = names.map(name => <h2>{name}</h2>)
  const persons = [  
   {
      id: 1,
      name: 'Bruce Wayne',
      age: '30',
      skill: 'Rich'
   },
   {
      id: 2,
      name: 'Diana Wayne',
      age: '30',
      skill: 'God'
   },
   {
      id: 3,
      name: 'Flash Wayne',
      age: '13',
      skill: 'Fast'
   }]

   const personList = persons.map(person => <Person key = {person.id} person={person} />)
 
  
   return <div>{personList}</div>
      // <div>  
      //       {/* <h2>{names[0]}</h2>
      //       <h2>{names[1]}</h2>
      //       <h2>{names[2]}</h2> */}
      //       {PersonList}
      //       {/* {nameList} */}
               
      // </div>
   
   }
export default NameList;