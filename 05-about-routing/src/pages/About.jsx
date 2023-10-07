import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About page</h1>
      {/* -1 matlab jaha se aaye the vahi par bapas chale jao. */}
      <button onClick={()=>{navigate(-1)}}>go to Home by navigate</button>
    </div>
  )
}

export default About
