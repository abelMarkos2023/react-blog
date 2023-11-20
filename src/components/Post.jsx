import React from 'react'
import {Link} from 'react-router-dom'
import {FaUser,FaDatabase} from 'react-icons/fa'
import { MdPublishedWithChanges } from "react-icons/md";
const Post = ({post}) => {
  return (
    <Link className='rounded shadow-lg' to={`/blogs/${post.id}`}>
        <div className="image">
            <img src={post.image} alt="" className='w-full' />
        </div>
        <div className="p-4">
        <h3 className="font-bold my-4 cursor-pointer hover:text-blue-600">{post.title}</h3>
        <p className="my-2 text-gray-600">
            <FaUser className='inline-flex mr-2 items-center'/> {post.author}
        </p>
        <p className="text-sm"><MdPublishedWithChanges className='inline-flex mr-2 items-center' /> {post.published_date}</p>
        </div>
    </Link>
  )
}

export default Post