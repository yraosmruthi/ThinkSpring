
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/AuthProvider'

const About = () => {
  const {user}= useAuth();
  return (
   <div className=''> 
   
     <div className='flex flex-row flex-1 p-[20px]'>
       
       <div className='w-[50%] ml-50  mr-30 mb-15'> 
           <h1 className='text-5xl font-bold mt-3 mb-6 bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 text-transparent bg-clip-text'><span className="bg-gradient-to-r from-[#3b3bca] via-purple-500 to-purple-500 bg-clip-text text-transparent">Why</span> Choose Us?</h1>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus amet illum unde obcaecati beatae blanditiis, dolores architecto exercitationem incidunt officiis tempora dolore, hic est nihil tenetur alias quis. Ut atque ex, quisquam libero voluptates voluptas vero inventore odit, aut optio sit a voluptatum, laboriosam dolor iure consequatur facilis obcaecati quae praesentium necessitatibus. Numquam, officia eos? Excepturi autem repellat aliquid doloribus rerum tempore quia fuga, nulla, repellendus laborum, iusto libero. Veniam sequi vero nisi eum quam. Porro quia eius temporibus placeat culpa error vitae dolorem quos officia dignissimos, corrupti aut quasi veritatis natus quisquam eaque totam quo dolores facere quaerat accusantium, cupiditate repellendus. Quas blanditiis quod ipsa, doloremque, ex nemo saepe sit reiciendis numquam, sint facere ipsam veniam modi quos? Quaerat, accusantium expedita. Doloribus nam minima, fuga iste debitis eum dolorum ea soluta impedit provident modi repellat repudiandae sunt ipsa unde quod laudantium consequatur in expedita quo itaque molestias autem! Id facilis tempora pariatur repellat labore molestiae earum velit sint esse molestias perferendis cupiditate deleniti itaque optio ipsum nobis ducimus, quidem officia dolorem a consectetur? Nesciunt porro dolor dignissimos quis quasi? Quibusdam quam officiis sunt, dicta cumque et. Iste repellat illo expedita quia id, quasi modi provident blanditiis neque deserunt nobis?</p>

          <div>
            <NavLink to='/contact'><button className='bg-[#3b3bca] rounded-md px-3 py-2 shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-900 hover:scale-105 hover:shadow-xl' type="button">Contact Now</button></NavLink>
            <NavLink to='/about'><button className='rounded-md border border-zinc-600 mt-5 px-3 py-2 ml-5 shadow-lg transition-all duration-300 ease-in-out hover:bg-zinc-700 hover:scale-105 hover:shadow-xl' type="button">Learn more</button></NavLink>
          </div>
        </div>

       <div className='w-[50%] mt-20'>
         <img className='w-[400px]' src="./images/about.png" alt="" />
       </div>

     </div>


   </div>
  )
}

export default About