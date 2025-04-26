
import React from 'react'
import { useAuth } from '../store/AuthProvider'


const Services  = () => {
  
const {services} = useAuth()

  return (
    <>
        <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 text-transparent bg-clip-text ml-40 mt-16 mb-10 ">
            Our Services
          </h1>
        </div>

        <div className='flex flex-row flex-wrap gap-10 ml-40 mt-10 mb-20'>
          {services.map((current,index)=>{
            const {service,description,price,provider}=current
             return (
              
              <div className="border w-[350px] border-[#3b3bca] rounded-2xl shadow-md bg-[#111111] text-white hover:shadow-lg hover:scale-105 transition-all duration-300" key={index}>
              <div className="m-4">
                <img className="w-full h-48 object-cover rounded-lg" src="/images/design.png" alt={service} />
              </div>

              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-[#6a6aff] font-semibold">{provider}</p>
                  <p className="text-[#00ffab] font-bold">₹{price}</p>
                </div>
                <h2 className="text-2xl font-bold text-[#facc15] mb-2">{service}</h2>
                <p className="text-gray-400 text-sm">{description}</p>
              </div>
            </div>

             )
           })}
          </div>

    </>
  )
}

export default Services 