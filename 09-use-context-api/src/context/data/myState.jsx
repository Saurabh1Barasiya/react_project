import React from 'react'
import MyContext from './myContext';

function MyState(props) {
    const state = {
        name: "Kamal Nayan",
        rollNumber: 15
    }
    const color = 'red';
  return (
    <MyContext.Provider value={{state,color}}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState