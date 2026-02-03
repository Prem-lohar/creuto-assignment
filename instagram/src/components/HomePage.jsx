import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login")
  }

  return (
    <div className='h-full w-full flex flex-col bg-amber-600 items-center justify-center'>
      This is a HomePage - WELCOME {currentUser.name}
      <button onClick={handleLogout} className='bg-blue-600 rounded-md px-2 py-1 flex items-center font-medium text-white mt-4'>Logout</button>
    </div>
  )
}

export default HomePage