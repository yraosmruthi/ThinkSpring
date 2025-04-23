 import React from 'react'
 import { NavLink } from 'react-router-dom'
 
 const Home = () => {
   return (
    <div className=''>
      <div className='flex flex-row mt-15'>
        <div className='mt-10 ml-30 w-[50%] mr-40'>
          <h1 className='text-5xl font-bold mb-10'>Welcome to ThinkSpring</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus veniam aliquid recusandae. Autem numquam, odit esse perspiciatis harum magnam delectus maxime quidem, consequuntur est, deleniti excepturi ipsam. Saepe consectetur explicabo amet repellat accusamus placeat doloribus libero, accusantium molestiae reiciendis!</p>

        <div>
         <NavLink to='/contact'><button className='rounded-md bg-[#3b3bca] mt-5 px-2 py-3' type="button">Contact Now</button></NavLink>
         <NavLink to='/about'><button className='rounded-md border border-zinc-600 mt-5 px-2 py-3 ml-5' type="button">Learn more</button></NavLink>
        </div>

        </div>

       <div className='mr-40 w-[50%]'>
        <img className='w-[400px]' src="./images/home.png"  />
       </div>

      </div>

      <div className='w-[65%] bg-white  ml-60 mr-40 mt-20 text-black rounded-md px-5 py-5 flex justify-evenly'>
          
        <div className="w-[2px] h-20 bg-zinc-500">
        </div>
        <div className="w-[2px] h-20 bg-zinc-500">
        </div>
        <div className="w-[2px] h-20 bg-zinc-500">
        </div>
  
      </div>
     
     <div className=''>
      <div className='flex flex-row mt-30 '>
        <div className='  ml-40 w-[50%]'>
          <img className='w-[430px]' src="./images/design.png"  />
        </div>

        <div className='mt-10 ml-30 w-[50%] mr-60'>
          <h1 className='text-5xl font-bold mb-10'>Get Started Today</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus veniam aliquid recusandae. Autem numquam, odit esse perspiciatis harum magnam delectus maxime quidem, consequuntur est, deleniti excepturi ipsam. Saepe consectetur explicabo amet repellat accusamus placeat doloribus libero, accusantium molestiae reiciendis!</p>

        <div>
          <NavLink to='/contact'><button className='rounded-md bg-[#3b3bca] mt-5 px-2 py-3' type="button">Contact Now</button></NavLink>
          <NavLink to='/about'><button className='rounded-md bg-transparent border border-zinc-600 mt-5 px-2 py-3 ml-5' type="button">Learn more</button></NavLink>
        </div>

        </div>

       </div>
      </div>

    </div>
   )
 }
 
 export default Home