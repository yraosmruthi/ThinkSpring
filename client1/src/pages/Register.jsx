import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthProvider';





const URL = 'http://localhost:3000/auth/register'
  const Register = () => {
  const navigate = useNavigate(); // ✅ Top-level usage
  const { storeInLS } = useAuth();
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:""
  })
 
  const handleInput = (e)=>{
    
    let name=e.target.name;
    let value=e.target.value;

     setUser({
       ...user,
       [name]:value
     })
    }
   

   const handleSubmit =async (e)=>{
    e.preventDefault();
    try{
    const response = await fetch(URL,{
     method:"POST",
     headers:{
      'Content-Type':'application/json'
     },
     body:JSON.stringify(user)

    });
    console.log("register",response);

    if(response.ok){
      const res_data = await response.json();
       console.log(res_data.token);
      storeInLS(res_data.token)
      alert('registration successful');
      setUser({
        username:"",
        email:"",
        phone:"",
        password:""
      });
      navigate("/login")
    } else{
      alert("invalid credential");
      console.log("invalid credential")
    }
  }catch(error){
    console.log(error);
  }
    }
   

  return (
    <div className='flex flex-row flex-1 p-[57px]'>

      <div className=''>
        <img  className ='w-[500px] mt-15 ml-50 ' src="./images/register.png" alt="no image"  />
      </div>

        <div className=' mt-20 ml-[150px]'>
          <h1 className='font-bold text-5xl'>Registration Form</h1>
            <form autoComplete='off' action="" onSubmit={handleSubmit}>
              <h2 className='mt-13 mb-2 text-l'>Username</h2>
              <input className='bg-zinc-700 rounded-md  w-[350px] h-8' type="text" name="username" required value={user.username} onChange={handleInput}/>
              <h2 className='mt-4 mb-2 text-l'>Email</h2>
              <input className='bg-zinc-700 rounded-md w-[350px] h-8'  type="text" name="email" required value={user.email} onChange={handleInput}/>
              <h2 className='mt-4 mb-2 text-l'>Phone</h2>
              <input className='bg-zinc-700 rounded-md w-[350px] h-8' type="text" name="phone" required value={user.phone} onChange={handleInput}/>
              <h2 className='mt-4 mb-2 text-l'>Password</h2>
              <input className='bg-zinc-700 rounded-md mb-5 w-[350px] h-8' type="password" name="password" required value={user.password} onChange={handleInput}/>
              
              <input className='block bg-[#3b3bca] rounded-md px-3 py-2' type="submit"  value='Register Now '/>

            </form> 
        </div>
    </div>
  )
}

export default Register