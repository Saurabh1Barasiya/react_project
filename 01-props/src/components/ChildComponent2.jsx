import React from 'react'

function ChildComponent2({g1}) {
  return (
    <div>
      <button className='text-white p-3 rounded-sm 
    bg-green-400 text-1xl  hover:bg-green-900'
      onClick={g1}>Greet</button>
    </div>
  )
}

export default ChildComponent2
