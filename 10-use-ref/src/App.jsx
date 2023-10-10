import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);
  // console.log(count);

  // useEffect(() => {
  //   count.current = count.current + 1;
  //   console.log("working",count.current);
  // });

  const [name, setName] = useState("");
  const refElement = useRef();
  console.log(refElement);

  const handleReset = ()=>{
    setName("");
    refElement.current.focus();

  }

  const handleInput = ()=>{
    refElement.current.style.color="Blue";
    refElement.current.style.backgroundColor="red";
    refElement.current.style.backgroundColor="red";
  }

  console.log(refElement);

  return (
    <>

      {/* <div>
        <h1>Learnig useRef</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Render Count: {count.current}</h2>
      </div> */}

      <input type="text"
        value={name} ref={refElement} onChange={(e)=>setName(e.target.value)}
      />
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleInput}>handleInput</button>

      <h1>name is {name}</h1>

    </>
  )
}

export default App
