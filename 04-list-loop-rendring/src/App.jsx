import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const items = ["Item 1", "Item 2", "Item 3"];
  const languages = ['JavaScript', 'Python', 'Java', 'C', 'C++', 'C#'];


  const skills = [
    { id: 1, skill: 'JavaScript' },
    { id: 2, skill: 'Python' },
    { id: 3, skill: 'Java' },
    { id: 4, skill: 'C' },
    { id: 5, skill: 'C++' },
    { id: 6, skill: 'C#' },
    { id: 7, skill: 'Html' },
    { id: 8, skill: 'Css' },
    { id: 9, skill: 'Bootstrap' },
    { id: 10, skill: 'Tailwind Css' },
    { id: 11, skill: 'Material ui' },
    { id: 12, skill: 'React Js' },
    { id: 13, skill: 'Next Js' },
    { id: 14, skill: 'Angular Js' },
    { id: 15, skill: 'Vue Js' },
    { id: 16, skill: 'React Native' },
    { id: 17, skill: 'Dart' },
    { id: 18, skill: 'Flutter' },
    { id: 19, skill: 'Github' },
    { id: 20, skill: 'Electron Js' },
  ];




  return (
    <>
      <div className="">
        <h1>Here i your items list</h1>
        <ul>
            {
              items.map((value,index)=>{
                return  <li key={index}>{value}</li>
              })
            }
        </ul>
      </div>

      <div className="">
        <h1>Here is your Programming Language list</h1>
        <ul>
          {
            languages.map((value,index)=>{
              return <li key={index}>{value}</li>
            })
          }
        </ul>
      </div>



      <div className="">
        <h1>Here is your Skills list</h1>
        <ul>
          {
            skills.map((value)=>{
              console.log(value);
              const {id,skill} = value
              console.log(id,skill);
              return <li key={id}>{skill}</li>
            })
          }
        </ul>
      </div>


      {
        skills.map((value,index,array)=>{
          console.log(value);
          console.log(index);
          console.log(array);
        })
      }
    </>
  )
}

export default App
