import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa6'
import { data } from '../blogsData';
const Sidebar = () => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        setBlogs(data.slice(1,5))
    },[])
  return (
    <div className='hidden md:block'>
        <h4 className="text-2xl px-4 mb-4  py-4 font-bold">
            Latest Posts
        </h4>
        {
            blogs && blogs.slice(2,5).map(blog => <div key={blog.id} className='shadow-lg mb-4 p-2'>
                <h2 className="font-mebium  mb-4 p-2 ">{blog.title}</h2>
                <Link to={`/blogs/${blog.id}`} className='font-medium text-orange-500 inline-flex items-center gap-4'>
                    Read More <FaArrowRight />
                </Link>
            </div>
            )
        }
    </div>
  )
}

export default Sidebar
