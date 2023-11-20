import React from 'react'
import {useLoaderData} from 'react-router-dom'
import {FaUser,FaClock} from 'react-icons/fa6'
import Sidebar from '../components/Sidebar'
const SinglePost = () => {
    const data = useLoaderData()
    const {title,image,author,category,published_date,reading_time,content} = data[0]
  return (
    <div className="single">
      <div className="py-40 bg-black text-white text-center px-4">
      <h2 className="text-5xl lg:text-7xl">Single Post</h2>
    </div>
    <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row md:gap-4">
      <div className="lg:w-3/4 mx-auto">
        <div className="image">
          <img src={image} className='w-full rounded' alt="" />
        </div>
        <h2 className="text-3xl my-4 font-bold text-blue-500">{title}</h2>
        <p><FaUser className='inline-flex items-center mr-2' />{author} | {published_date}</p>
        <div className="my-4"><FaClock className='inline-flex items-center mr-2' />{reading_time}</div>
        <p className="text-lg text-gray-600">{content}</p>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt maxime debitis vero. Quae sunt temporibus magni beatae, architecto laboriosam obcaecati eveniet. Quod perferendis ipsa laborum vel non libero deleniti quam voluptatibus optio, ducimus tempore quidem corrupti eius praesentium a minus tempora quisquam cupiditate cumque eveniet reprehenderit earum aliquam est. Quibusdam, placeat possimus voluptate accusantium ullam quae aut ea, similique ipsa non soluta, eveniet expedita nesciunt harum id reprehenderit perspiciatis. Consectetur atque nobis fugiat aliquid labore temporibus provident culpa neque ipsam, laboriosam nemo impedit sint sequi velit harum ad quia sapiente expedita quis libero dolore veritatis repellendus beatae minus. Beatae, inventore!</p>
        <p className="text-lg text-gray-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum soluta dignissimos voluptates maxime officia expedita alias incidunt, dolores voluptatum architecto non fuga aut officiis omnis nam neque iusto sint reiciendis nihil recusandae esse! Asperiores repellendus voluptas consequuntur corporis quos ut, iusto repellat ducimus placeat quisquam a hic deleniti. Quis, earum.</p>
        <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque eius voluptas, odio placeat, fuga recusandae tempore alias ad asperiores corporis natus itaque beatae aperiam?</p>
      </div>
      <div className="flex-1 py-[-80px]">
        <Sidebar />
      </div>
    </div>
    </div>
  )
}

export default SinglePost