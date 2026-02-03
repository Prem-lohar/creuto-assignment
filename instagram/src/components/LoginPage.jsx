import React, { useState } from 'react'

import logo from "../assets/logo.png"
import google from "../assets/google.png"
import microsoft from "../assets/microsoft.png"
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'


const LoginPage = () => {
  const navigate = useNavigate();

  const [Input, setInput] = useState({
    emnum: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const { emnum, password } = Input;
    if (!emnum || !password) {
      alert("fill all the fields")
      return;
    }

    const users = JSON.parse(localStorage.getItem("user")) || []

    if (!Array.isArray(users)) {
      alert("no user found, please signup");
      return;
    }

    const matchedUser = users.find((users) => users.emnum === emnum && users.password === password);

    if (matchedUser) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));
      navigate("/home");
    }
    else {
      alert("wrong email or password");
    }
  };

  return (
    <div className='flex flex-col gap-4 w-full mt-10 max-w-87.5'>
      <div className='flex flex-col items-center px-8 py-8 border border-gray-300 bg-white'>
        <form onSubmit={handleLogin} className='flex flex-col items-center w-full' action="">
          <img className='w-43.75 mb-8 mt-2' src={logo} alt="Instagram" />
          <input name="emnum" value={Input.emnum} onChange={(e) => setInput({ ...Input, [e.target.name]: e.target.value })} className='bg-gray-50 border border-gray-300 px-2 py-2 w-full rounded-sm text-xs mb-1 focus:outline-none focus:border-gray-400' type="text" placeholder='Phone number, username, or email' />
          <input name="password" value={Input.password} onChange={(e) => setInput({ ...Input, [e.target.name]: e.target.value })} className='bg-gray-50 border border-gray-300 px-2 py-2 w-full rounded-sm text-xs mb-3 focus:outline-none focus:border-gray-400' type="password" placeholder='Password' />
          <button className='bg-[#0095f6] rounded-lg py-1.5 w-full cursor-pointer text-white font-semibold text-sm mb-4 disabled:opacity-70'>Log in</button>

          <div className="flex flex-row items-center w-full mb-4">
            <div className="h-px bg-gray-300 flex-1"></div>
            <div className="px-4 text-gray-500 font-semibold text-[13px]">OR</div>
            <div className="h-px bg-gray-300 flex-1"></div>
          </div>

          <a className='mb-3 text-[#385185] font-semibold text-sm flex items-center gap-2' href="">
            Login with Facebook
          </a>
          <a className='text-xs text-[#00376b]' href="">Forgotten your password?</a>
        </form>
      </div>

      <div className='flex items-center justify-center border border-gray-300 py-5 bg-white'>
        <p className='text-sm m-0'>Don't have an account? <Link className='text-[#0095f6] font-semibold' to="/">Sign up</Link></p>
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

export default LoginPage