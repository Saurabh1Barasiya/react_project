import React, { useContext } from 'react'
import myContext from '../context/data/myContext'
import './ComponentTwo.css'

function ComponentTwo() {
    const context = useContext(myContext);
    console.log(context);
    const  {state,color} = context;
    const {name,rollNumber} = state;
    console.log(name,rollNumber,color);
  return (
    <div className='two'>
        ComponentTwo
        <h1>Name: {name}</h1>
        <h1>Roll Number : {rollNumber}</h1>
        <h1>My Color : {color}</h1>
    </div>
  )
}

export default ComponentTwo