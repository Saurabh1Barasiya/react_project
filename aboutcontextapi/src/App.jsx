import { useState } from 'react';
import UserContextProvider from './Context/UserContextProvider';
import Login from './Component/Login';
import Profile from './Component/Profile';


function App() {
  return (
    <UserContextProvider>
      <div className="bg-gray-700 text-center text-3xl text-white h-screen w-full flex justify-center items-center">
          <div className="flex flex-col gap-3">
            <Login/>
            <Profile/>
          </div>
      </div>
    </UserContextProvider>
  )
}

export default App
