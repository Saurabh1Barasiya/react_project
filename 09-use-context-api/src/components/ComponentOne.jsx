import React, { useContext } from 'react'
import myContext from '../context/data/myContext'
import './ComponentOne.css'

function ComponentOne() {
    const context = useContext(myContext);
    console.log(context);
    const {state,color} = context
    const {name,rollNumber} = state
    console.log(name,rollNumber,color);
    // const {name, rollNumber, color} = context;
  return (
    <div className='one'>
        ComponentOne
        <h2>Name : {name}</h2>
        <h2>Roll Number : {rollNumber}</h2>
        <h2>My Color : {color}</h2>
    </div>
  )
}

export default ComponentOne