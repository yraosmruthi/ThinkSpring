import React from 'react'
import { NavLink } from 'react-router-dom'
 
 const Nav = () => {

   return (
    <div className=' text-[#3b3bca] text-l font-semibold flex justify-between px-5 py-4 '>
        <div className=''>
            <NavLink className='ml-2 ' to="/">Rao Associates</NavLink>
        </div>
        <div className='  flex gap-9 mr-20 ' >
            <ul><NavLink to="/">Home</NavLink></ul>
            <ul><NavLink to="/about">About</NavLink></ul> 
            <ul><NavLink to="/contact">Contact</NavLink></ul>
            <ul><NavLink to="/services">Services</NavLink></ul>
            <ul><NavLink to="/register">Sign Up</NavLink></ul>
            <ul><NavLink to="/login">Login</NavLink></ul>
            
        </div>

    </div>
    )
 }
 
 export default Nav