import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);

  const incCount = ()=>{
    counter += 1
    if (counter  >= 12){
      counter = 12
    }
    setCounter(counter);
  }
  
  const decCount = ()=>{
    counter -= 1
    if (counter  <= 0){
      counter = 0
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>hello its a basic counter application.</h1>  

      <h3>Counter : {counter}</h3>  

      <button onClick={incCount}>increase</button> <br />
      <button onClick={decCount}>remove</button> 
    </>
  )
}

export default App
