 import React from 'react'
 import { NavLink } from 'react-router-dom'
 
 const Home = () => {
   return (
    <div className=''>
      <div className='flex flex-row mt-15'>
        <div className='mt-10 ml-30 w-[60%] mr-40'>
        <h1 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 bg-clip-text text-transparent">
         Welcome to <span className="bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 bg-clip-text text-transparent">ThinkSpring</span>
         </h1>


          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus veniam aliquid recusandae. Autem numquam, odit esse perspiciatis harum magnam delectus maxime quidem, consequuntur est, deleniti excepturi ipsam. Saepe consectetur explicabo amet repellat accusamus placeat doloribus libero, accusantium molestiae reiciendis!</p>

        <div>
         <NavLink to='/contact'><button className='bg-[#3b3bca] rounded-md px-3 py-2 shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-900 hover:scale-105 hover:shadow-xl' type="button">Contact Now</button></NavLink>
         <NavLink to='/about'><button className='rounded-md border border-zinc-600 mt-5 px-3 py-2 ml-5 shadow-lg transition-all duration-300 ease-in-out hover:bg-zinc-700 hover:scale-105 hover:shadow-xl' type="button">Learn more</button></NavLink>
        </div>

        </div>

       <div className='mr-40 w-[50%]'>
        <img className='w-[400px]' src="./images/home.png"  />
       </div>

      </div>

          <div className='w-[75%] bg-white ml-60 mr-40 mt-20 text-black rounded-md px-5 py-5 flex justify-between'>
      
          <div className='text-center w-1/4'>
            <h2 className="text-3xl font-bold text-[#3b3bca]">100+</h2>
            <p className="text-sm mt-2">Projects Completed</p>
          </div>

          <div className="w-[1px] bg-zinc-400 mx-4"></div>

          <div className='text-center w-1/4'>
            <h2 className="text-3xl font-bold text-[#3b3bca]">50+</h2>
            <p className="text-sm mt-2">Satisfied Clients</p>
          </div>

          <div className="w-[1px] bg-zinc-400 mx-4"></div>

          <div className='text-center w-1/4'>
            <h2 className="text-3xl font-bold text-[#3b3bca]">24/7</h2>
            <p className="text-sm mt-2">Support Available</p>
          </div>

          <div className="w-[1px] bg-zinc-400 mx-4"></div>

          <div className='text-center w-1/4'>
            <h2 className="text-3xl font-bold text-[#3b3bca]">10+</h2>
            <p className="text-sm mt-2">Awards Won</p>
          </div>

      </div>



    <div className=''>
      <div className='flex flex-row mt-30 '>
        <div className='  ml-40 mb-10 w-[50%]'>
          <img className='w-[430px]' src="./images/design.png"  />
        </div>

        <div className='mt-10 ml-30 w-[50%] mr-60'>
          <h1 className='text-5xl font-bold mb-10 bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 bg-clip-text text-transparent'>Get Started <span className="bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 bg-clip-text text-transparent">Today</span></h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos temporibus veniam aliquid recusandae. Autem numquam, odit esse perspiciatis harum magnam delectus maxime quidem, consequuntur est, deleniti excepturi ipsam. Saepe consectetur explicabo amet repellat accusamus placeat doloribus libero, accusantium molestiae reiciendis!</p>

        <div>
         <NavLink to='/contact'><button className='bg-[#3b3bca] rounded-md px-3 py-2 shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-900 hover:scale-105 hover:shadow-xl' type="button">Contact Now</button></NavLink>
         <NavLink to='/about'><button className='rounded-md border border-zinc-600 mt-5 px-3 py-2 ml-5 shadow-lg transition-all duration-300 ease-in-out hover:bg-zinc-700 hover:scale-105 hover:shadow-xl' type="button">Learn more</button></NavLink>
        </div>

        </div>

       </div>
      </div>

    </div>
   )
 }
 
 export default Home