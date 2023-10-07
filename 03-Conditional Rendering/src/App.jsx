import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login';
import Home from './pages/Home';

function App() {

// one way.................................................
// if Statement

//  const isAuth = false;

//  if(isAuth){
//   return <Login/>
//  }
//  return <Home/>


  
  // Ternary Operator
  // const isAuth = false;
  // return (
  //   <>
  //       {isAuth?<Login/>:<Home/>}
  //   </>
  // )


  // Logical && Operator
  const fruits = ["banana","apple","mango","graps"];

  return (
    <>
      {fruits.length == 4 && <h1>I have 4 fruits.</h1>}
    </>
  )


  
}

export default App