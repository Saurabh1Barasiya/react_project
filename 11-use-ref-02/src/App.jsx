import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [myData, setMyData] = useState("");


  // const [count, setCount] = useState();


  // useEffect(()=>{
  //   setCount(count+1);
  // })


  const count = useRef(0);
  
  useEffect(()=>{
    count.current = count.current+1;
  })

  return (
    <>
     <input type="text" value={myData} onChange={(e)=>setMyData(e.target.value)} />

     <h1>The value of count is {count.current}</h1>
    </>
  )
}

export default App
