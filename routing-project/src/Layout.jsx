import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

// Outlet is Layout ko as a base use kae lega or ,
// jaha jaha <Outlet></Outlet> likha h vaha par component ko 
// dynamically add karega.


// to yaha par header and footer same rahega uske ander ki cheeje change hoti rahegi.

function Layout() {
  return (
    <>
      <Header/>
      <Outlet></Outlet>
      <Footer/>
    </>
  )
}

export default Layout
