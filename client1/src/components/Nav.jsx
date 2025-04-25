import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/AuthProvider'
 
 const Nav = () => {

    const {isLoggedIn} = useAuth();
   return (
    <div className=' text-[#3b3bca] text-l font-semibold flex justify-between px-5 py-4 '>
        <div className=''>
            <NavLink className='ml-2 hover:underline decoration-white underline-offset-6 hover:text-[#5959d6] active:text-[#6f6fe6]' to="/">ThinkSpring</NavLink>
        </div>
        <div className='  flex gap-9 mr-20 ' >
            <ul><NavLink className='hover:underline decoration-white underline-offset-6 hover:text-[#5959d6] active:text-[#6f6fe6]'  to="/">Home</NavLink></ul>
            <ul><NavLink className='hover:underline decoration-white underline-offset-6 hover:text-[#5959d6] active:text-[#6f6fe6]'  to="/about">About</NavLink></ul> 
            <ul><NavLink className='hover:underline decoration-white underline-offset-6 hover:text-[#5959d6] active:text-[#6f6fe6]'  to="/contact">Contact</NavLink></ul>
            <ul><NavLink className='hover:underline decoration-white underline-offset-6 hover:text-[#5959d6]  active:text-[#6f6fe6]'  to="/services">Services</NavLink></ul>
            {isLoggedIn ?(                                                                
                <ul><NavLink className='hover:underline decoration-white underline-offset-6 hover:text-[#5959d6]  active:text-[#6f6fe6]' to="/logout">Logout</NavLink></ul>
            ):(
            <>
             <ul><NavLink className='hover:underline decoration-white underline-offset-6 hover:text-[#5959d6]  active:text-[#6f6fe6]' to="/register">Sign Up</NavLink></ul>
            <ul><NavLink className='hover:underline decoration-white underline-offset-6 hover:text-[#5959d6]  active:text-[#6f6fe6]' to="/login">Login</NavLink></ul>
            </>
        )}
            
        </div>

    </div>
    )
 }
 
 export default Nav