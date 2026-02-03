import React, { useState } from 'react'

import logo from "../assets/logo.png"
import google from "../assets/google.png"
import microsoft from "../assets/microsoft.png"
import { Link, useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const navigate = useNavigate();
  const [Input, setInput] = useState({
    emnum: "",
    name: "",
    usrname: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { emnum, name, usrname, password } = Input;

    if (!emnum || !name || !usrname || !password) {
      alert("pls fill all the fields");
      return;
    }

    let existingUsers = JSON.parse(localStorage.getItem("user")) || []

    if (!Array.isArray(existingUsers)) {
      existingUsers = []
    }


    const userExists = existingUsers.some(
      (user) => user.emnum === emnum || user.usrname === usrname
    );

    if (userExists) {
      alert("user already exists");
      return;
    }

    existingUsers.push({
      emnum,
      name,
      usrname,
      password,
    });

    localStorage.setItem("user", JSON.stringify(existingUsers));
    alert("signup successful")
    navigate("/login");
  }

  return (
    <div className='flex flex-col gap-4 mt-10 w-full max-w-87.5'>
      <div className='flex flex-col items-center px-8 py-8 border border-gray-300 bg-white'>
        <form onSubmit={handleSubmit} className='flex flex-col items-center w-full' action="">
          <img className='w-43.75 mb-4 mt-2' src={logo} alt="Instagram" />


          <input name="emnum" value={Input.emnum} onChange={(e) => setInput({ ...Input, [e.target.name]: e.target.value })} className='bg-gray-50 border border-gray-300 px-2 py-2 w-full rounded-sm text-xs mb-1.5 focus:outline-none focus:border-gray-400' type="text" placeholder='Mobile Number or Email' />
          <input name="name" value={Input.name} onChange={(e) => setInput({ ...Input, [e.target.name]: e.target.value })} className='bg-gray-50 border border-gray-300 px-2 py-2 w-full rounded-sm text-xs mb-1.5 focus:outline-none focus:border-gray-400' type="text" placeholder='Full Name' />
          <input name="usrname" value={Input.usrname} onChange={(e) => setInput({ ...Input, [e.target.name]: e.target.value })} className='bg-gray-50 border border-gray-300 px-2 py-2 w-full rounded-sm text-xs mb-1.5 focus:outline-none focus:border-gray-400' type="text" placeholder='Username' />
          <input name="password" value={Input.password} onChange={(e) => setInput({ ...Input, [e.target.name]: e.target.value })} className='bg-gray-50 border border-gray-300 px-2 py-2 w-full rounded-sm text-xs mb-4 focus:outline-none focus:border-gray-400' type="password" placeholder='Password' />


          <button className='bg-[#0095f6] rounded-lg py-1.5 w-full cursor-pointer text-white font-semibold text-sm mb-4 disabled:opacity-70'>Sign up</button>

          <div className="flex flex-row items-center w-full mb-4">
            <div className="h-px bg-gray-300 flex-1"></div>
            <div className="px-4 text-gray-500 font-semibold text-[13px]">OR</div>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <a className='mb-3 text-[#385185] font-semibold text-sm flex items-center gap-2' href="">
            Login with Facebook
          </a>
        </form>
      </div>

      <div className='flex items-center justify-center border border-gray-300 py-5 bg-white'>
        <p className='text-sm m-0'>Have an account? <Link className='text-[#0095f6] font-semibold' to="/login">Log in</Link></p>
      </div>

      <div className='flex flex-col items-center gap-4'>
        <p className='text-sm'>Get the app.</p>
        <div className='flex flex-row gap-2 justify-center'>
          <a href="" className='h-10'><img className='h-full' src={google} alt="Get it on Google Play" /></a>
          <a href="" className='h-10'><img className='h-full' src={microsoft} alt="Get it from Microsoft" /></a>
        </div>
      </div>
    </div>
  )
}

export default SignupPage