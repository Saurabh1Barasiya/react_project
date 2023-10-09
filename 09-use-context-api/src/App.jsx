import React from 'react'
import MyState from "./context/data/myState";
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

function App() {
  return (
    <MyState>
      <ComponentOne/>
      <ComponentTwo/>
    </MyState>
  )
}

export default App
