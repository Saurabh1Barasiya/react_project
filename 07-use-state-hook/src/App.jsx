import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({name:"saurabh",age:26});

  // const updateName = ()=>{
  //   console.log(data);
  //   console.log({...data});
  //   setData({...data,name:"Hero",age:21});
  //   console.log(data);
  // }

  return (
   <>
      <h1>Hello sir</h1>
      <h3>My name is {data.name}</h3>
      <h3>My name is {data.age}</h3>

      {/* <button onClick={updateName}>Update name</button> */}
      <button onClick={()=>{
        setData({...data,name:"Awesome",age:25});
      }}>Update name</button>
   </>
  )
}

export default App
