
import React, { useState } from 'react'

const Contact = () => {
  const[contact,setContact]=useState({
    username:"",
    email:"",
    message:""
  });

  const handleInput =(e)=>{
   let name=e.target.name;
   let value=e.target.value;

   setContact({
    ...contact,
    [name]:value
   })
  }

  const handleSubmit =(e)=>{
   e.preventDefault();
   console.log(contact);
   alert('data stored')
  }

  return (
    <>
    <div className=' flex flex-1 '>
      <div className=''>
        <h1 className='text-3xl font-bold mt-5 ml-50'>Contact Us</h1>
        <img className='w-[400px] ml-60 mt-30' src="./images/support.png" alt="" />
      </div>

      <div className='w-[50%] ml-60 mt-30'>
        <form action="" autoComplete='off' onSubmit={handleSubmit}>
          <h2 className='text-l mb-3'>Username</h2>
          <input className='bg-zinc-700 rounded-md w-[350px] h-8 mb-3'   type="text" name='username' value={contact.username} onChange={handleInput}/>
          <h2 className='text-l mb-3'>Email</h2>
          <input className='bg-zinc-700 rounded-md w-[350px] h-8 mb-3' type="text" name='email' value={contact.email} onChange={handleInput}/>
          <h2 className='text-l mb-3'>Message</h2>
          <textarea name="message" id="message" cols='30' rows='10' className='bg-zinc-700 rounded-md w-[350px]' value={contact.message} onChange={handleInput}></textarea>
          <input className='block bg-[#3b3bca] mt-3 rounded-md px-4 py-3' type="submit" />
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