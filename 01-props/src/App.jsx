import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent1 from './components/ChildComponent1';
import ChildComponent2 from './components/ChildComponent2';

function App() {
  const name = "my name is saurbh";
  const greet = ()=>{
    alert("hi my name is peeyush and i am from secound component");
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-slate-500 flex-wrap gap-6">
        <ChildComponent1 name={name}/>
        {/* yaha par app props ka name kuch bhi rakh sakte h */}
        <ChildComponent2 g1={greet}/>
      </div>
    </>
  )
}

export default App
