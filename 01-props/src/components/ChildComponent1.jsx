import React from 'react'

function ChildComponent1({name}) {
//   console.log(props);
  // to hamare pass props me object aata h ham usko direct hi destructure kar sakte h ..
  console.log(name);
  return (
    <div>
      <h1 className='text-3xl text-white'>{name}, and i am from ChildComponent1 component</h1>
    </div>
  )
}

export default ChildComponent1
