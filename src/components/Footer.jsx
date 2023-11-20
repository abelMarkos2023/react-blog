import React from 'react'
import {FaTwitter,FaTwitch,FaInstagram,FaFacebook,FaLinkedin} from 'react-icons/fa6'
const Footer = () => {
  return (
<div className="bg-gray-900">
    <div className="px-2 pt-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-2">
        <div className="flex flex-col md:flex-row ">
        <div className="flex-2 grid grid-cols-2 md:grid-cols-4 lg:col-span-4">
        <div className="categories">
            <p className=" font-bold text-xl tracking-wide text-gray-300">
                Categories
            </p>
            <ul className="list-none space-y-4 text-gray-300 p-4">
                <li className='text-md hover:text-orange-400'>
                    <a href="#">News</a>
                </li >
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Software</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Companies</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Trends</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Features</a>
                </li>
                
            </ul>
        </div>
        <div className="categories">
            <p className=" font-bold text-xl tracking-wide text-gray-300">
                Development
            </p>
            <ul className="list-none space-y-4 text-gray-300 p-4">
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Web</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Mobile</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Design</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Artifical Inteligant</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Networks</a>
                </li>
                </ul>
                </div>
                <div className="categories">
            <p className=" font-bold text-xl tracking-wide text-gray-300">
                Cherry
            </p>
            <ul className="list-none space-y-4 text-gray-300 p-4">
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Education</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Non Profit</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Projects</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Partner</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Out Reach</a>
                </li>
                </ul>
                </div>
                <div className="categories">
            <p className=" font-bold text-xl tracking-wide text-gray-300">
                Businesses
            </p>
            <ul className="list-none space-y-4 text-gray-300 p-4">
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Freelance</a>
                </li >
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Crypto</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Training</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Consult</a>
                </li>
                <li className='text-md hover:text-orange-400'>
                    <a href="#">Colaporate</a>
                </li>
                
            </ul>
        </div>
        </div>
        <div className="categories flex-1 ">
            <p className=" font-bold text-2xl tracking-wide text-gray-300">
                Subscription
            </p>
            <form action="" className="flex-4 mt-4 w-full flex gap-4 items-center ">
                <input type="text" className="bg-white border px-4 w-full h-12 focus:outline-none rounded shadow-md focus:border-purple-400" />
                <button className="flex-1 border-none rounded shadow-lg px-4 py-2 hover:bg-orange-400 text-white bg-green-500">Subscripe</button>
            </form>
            <p className="text-gray-400 mt-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, distinctio sunt ipsam harum eos repellendus molestiae, labore velit in error sapiente eaque, temporibus iusto voluptatibus repellat vero quod earum? Molestiae!
            </p>
            </div>
            </div>
            <div className="py-8 mt-8 text-gray-200 border-t border-gray-400 flex flex-col md:flex-row items-center justify-between">
                <p className="text-xl">&copy;Copyright  |2023 All Rights Reserved</p>
                <div className="social mt-4 flex items-center gap-4">
                    <a href="#" className="text-gray-500">
                        <FaTwitter className='w-6 h-6 hover:text-orange-500' />
                    </a>
                    <a href="#" className="text-gray-500">
                        <FaTwitch className='w-6 h-6 hover:text-orange-500' />
                    </a>
                    <a href="#" className="text-gray-500">
                        <FaInstagram className='w-6 h-6 hover:text-orange-500' />
                    </a>
                    <a href="#" className="text-gray-500">
                        <FaFacebook className='w-6 h-6 hover:text-orange-500' />
                    </a>
                    <a href="#" className="text-gray-500">
                        <FaLinkedin className='w-6 h-6 hover:text-orange-500' />
                    </a>
                </div>
            </div>
    </div>
</div>  
)
}

export default Footer