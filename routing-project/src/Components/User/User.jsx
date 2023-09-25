import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-white text-3xl px-5
    py-5 my-4'>
      User: {userid}
    </div>
  )
}

export default User
