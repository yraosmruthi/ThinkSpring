
import React, { useState,useEffect } from 'react'
import { useAuth } from '../store/AuthProvider';
import { toast } from 'react-toastify';


const URL = 'http://localhost:3000/auth/user'

const Contact =  () => {

   const defaultContactForm={
    username:"",
    email:"",
    message:""
   }

   
  
   const[contact,setContact]=useState(defaultContactForm);
   const {user,isLoggedIn} = useAuth();

     useEffect(() => {
        if (user && isLoggedIn) {
          
          setContact({
            username: user.username || "",
            email: user.email || "",
            message: ""
          });
        } else {
          
          setContact(defaultContactForm);  
        }
      }, [user,isLoggedIn]);
 
   const handleInput =(e)=>{
   let name=e.target.name;
   let value=e.target.value;

   setContact({
    ...contact,
    [name]:value
   })
  }

  const handleSubmit = async (e)=>{
   e.preventDefault();

   console.log(contact);
   try{

   const response = await fetch('http://localhost:3000/form/contact',{
    method:'POST',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify(contact)
  })
  
  const data = await response.json()

  if(response.ok){
    setContact(defaultContactForm)
    console.log(data)
    toast.success('message recieved successfully')
   }
   else{
    toast.error(data?.extraDetails || data?.message || "Message not sent.");
   }
  }catch(error){
    toast.error("Network error.Try again later")
 }
}

  return (
    <>
    <div className=' flex flex-1 '>
      <div className=''>
        <h1 className='text-5xl font-bold mt-5 ml-50 bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 text-transparent bg-clip-text'>Contact Us</h1>
        <img className='w-[400px] ml-60 mt-20' src="./images/support.png" alt="" />
      </div>

      <div className='w-[50%] ml-60 mt-20'>
        <form action="" autoComplete='off' onSubmit={handleSubmit}>
          <h2 className='text-l mb-3'>Username</h2>
          <input className='bg-zinc-700 rounded-md w-[350px] h-8 mb-3'   type="text" name='username' value={contact.username} onChange={handleInput}/>
          <h2 className='text-l mb-3'>Email</h2>
          <input className='bg-zinc-700 rounded-md w-[350px] h-8 mb-3' type="text" name='email' value={contact.email} onChange={handleInput}/>
          <h2 className='text-l mb-3'>Message</h2>
          <textarea name="message" id="message" cols='30' rows='10' className='bg-zinc-700 rounded-md w-[350px]' value={contact.message} onChange={handleInput}></textarea>
          <input className='block  mt-3 rounded-md px-3 py-2 bg-[#3b3bca] shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-900 hover:scale-105 hover:shadow-xl' type="submit" />
        </form>
      </div>
  </div>

  <div className="w-full mt-20">
    <iframe
      title="Location Map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d553.4351540389879!2d76.63449547612458!3d12.30027514754825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7aaf387738e7%3A0x5a10ddfc50840170!2sRao%20Associates!5e0!3m2!1sen!2sin!4v1745088544463!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="w-full"
    />
  </div>
</>

  )
}

export default Contact