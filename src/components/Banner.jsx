import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="px-4 py-32 mx-auto bg-black">
        <div className="text-white text-center">
            <h1 className="text-center text-5xl leading-snug text-white font-bold lg:text-7xl">Welcome To Our Blog</h1>
            <p className="my-5 italic text-gray-200 w-3/5 mx-auto">
            Start your blog today and join a community of writers and readers who are passionate about sharing their stories.we offer everything from helpful tips to tutorials
            </p>
            <div>
                <Link to='' className='inline-flex items-center gap-1 hover:text-orange-600 rounded-lg'>Learn More <FaArrowRight /></Link>
            </div>
        </div>
    </div>
  )
}

export default Banner