import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/AuthProvider';
import {toast} from 'react-toastify'


const URL = 'http://localhost:3000/auth/login';

const Login = () => {
  const navigate = useNavigate();
  const { storeInLS } = useAuth();
    const [user,setUser] = useState({
        email:"",
        password:""
    })

    const handleInput = (e)=>{
      console.log(e);
     let name=e.target.name;
     let value=e.target.value;

      setUser({
        ...user,
        [name]:value
      })
    }

    
   const handleSubmit = async (e)=>{
   
    try{
    e.preventDefault();
    
    const response = await fetch(URL,{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)

    })
    console.log("login",response);

    const res_data = await response.json();

    if(response.ok){
      
      storeInLS(res_data.token)
      toast.success('login successful');
      setUser({
        email:"",
        password:""
      });
      navigate("/")
    } else{
      toast.error(res_data?.extraDetails || res_data?.message || "Login failed. Please check your input.");
      console.log("invalid credential")
    }
  }catch(error){
    console.log(error);
  }
   }

  return (
    <div>
       <div className='flex flex-row flex-1 p-[67px]'>
            <div className=''>
            <img  className ='w-[480px] mt-15 ml-50  ' src="./images/login.png" alt="no image"  />
            </div>

           <div className=' mt-20 ml-[150px]'>
            <h1 className='font-bold text-5xl bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 text-transparent bg-clip-text'><span className="bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 bg-clip-text text-transparent">Login</span> Form</h1>

            <form autoComplete='off' action="" onSubmit={handleSubmit}>
               
                <h2 className='mt-12 mb-2 text-l'>Email</h2>
                <input className='bg-zinc-700 rounded-md w-[350px] h-8'  type="text" name="email" required value={user.email} onChange={handleInput}/>
               
                <h2 className='mt-4 mb-2 text-l'>Password</h2>
                <input className='bg-zinc-700 rounded-md mb-5 w-[350px] h-8' type="password" name="password" required value={user.password} onChange={handleInput}/>
                
                <input className='block bg-[#3b3bca] rounded-md px-4 py-2 shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-900 hover:scale-105 hover:shadow-xl' type="submit"  value='Login '/>

            </form> 
           </div>
        </div>
    </div>
  )
}

export default Login