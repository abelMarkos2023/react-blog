import React from 'react'
import Posts from '../components/Posts'
import Sidebar from '../components/Sidebar'

const Blogs = () => {
  return (
    <>
    <div className='bg-black py-40 px-4 text-white'>
      <h1 className="text-center text-5xl leading-snug text-white font-bold lg:text-7xl">Blog Page</h1>
      
    </div>
    <div className="max-w-7xl p-4 bg-gray-100 mx-auto">
        <div className="flex gap-8">
        <Posts />
        <div className="py-20 flex-2">
        <Sidebar />
        </div>
        </div>
      </div>
    </>
  )
}

export default Blogs