import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

//   const [data, setData] = useState();
//   useEffect(()=>{
//     fetch("https://api.github.com/users/saurabh1barasiya")
//     .then(res=>res.json())
//     .then(finalData=>{
//         setData(finalData);
//     })
//   },[])

//   console.log(data?.followers);


  const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-500 text-white
    p-4 text-3xl'>
      Github followers: <span>{data?.followers}</span>
    </div>
  )
}

export default Github


export const githubInfoLoader = async()=>{
    const response = await fetch("https://api.github.com/users/saurabh1barasiya");
    return response.json();
}