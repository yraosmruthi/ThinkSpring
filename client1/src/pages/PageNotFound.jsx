import React from 'react'


const PageNotFound = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen items-center'>
       <h1 className="text-9xl font-bold bg-gradient-to-r from-[#3b3bca] via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
        404
       </h1>

        <h3 className='text-[#6c6cff] mt-5 text-xl font-bold animate-pulse'>Page Not Found</h3>
      <a href="/"> <button className='mt-6 bg-purple-400 rounded-md px-3 py-2 shadow-lg transition-all duration-300 ease-in-out hover:bg-purple-500 hover:scale-105 hover:shadow-xl' type="button">Go To Home</button>
      </a>
       
    </div>
  )
}

export default PageNotFound
