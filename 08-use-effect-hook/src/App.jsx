import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // To jab bhi count variable ki value update ho useEffect chalega.

  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   console.log("i am runnnig");
  //   setTimeout(()=>{
  //     setCount(count+1);
  //   },1000)
  // })



  // Abhi ye 1 baar hi chalega.

  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   console.log("i am runnnig");
  //   setTimeout(()=>{
  //     setCount(count+1);
  //   },1000)
  // },[])

  const [count,setCount] = useState(0);
  const [calculation,setCalculation] = useState(0);

  const update = ()=>{
    setCount(count+1)
  }

  useEffect(()=>{
    // setCalculation(count*2);
    setCalculation(() => count * 2);
  },[count])

  return (
   <>
      <h1>UseEffect</h1>
      <div className="card">
        count {count}
        calculation {calculation}
      </div>
      <button type="button" onClick={update}>Click</button>
   </>
  )
}

export default App
