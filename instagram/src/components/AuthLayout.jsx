import React from 'react'
import { Outlet } from 'react-router-dom'
import image from "../assets/image.png"

const AuthLayout = () => {
    return (
        <div className='w-full flex flex-row items-center justify-center gap-8 h-full'>
            <div className='hidden min-[875px]:block relative'>
                <img className='h-145' src={image} alt="left side image" />
            </div>
            <Outlet />
        </div>
    )
}

export default AuthLayout
