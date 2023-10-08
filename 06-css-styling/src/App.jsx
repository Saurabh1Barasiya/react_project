import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styles from './index.module.css'
function App() {


  // 1. Inline Styling
  // 2. CSS Stylesheets
  // 3. CSS Modules

  const design = {
    backgroundColor:'red',
    color:'white'
  }

  return (
    <>
      <h1 style={{backgroundColor:'red',color:'white'}}>Hello i am inline css</h1>

      <h2 style={design}>Hello i am also inline but diffrent way css.</h2>

      <h3 className='third-element'>I am third element</h3>

      <h4 className={styles.myclass}>I am fourth element</h4>

      <h4 id={styles.myid}>I am fifth element</h4>
    </>
  )
}

export default App
