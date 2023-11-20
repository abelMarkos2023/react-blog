import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {FaFacebook,FaInstagram,FaLinkedin,FaTwitter,FaX,FaBars} from 'react-icons/fa6'
const Navbar = () => {
    const [open,setOpen] = useState(false)
    const location = useLocation();
    console.log(location.pathname)
    const links = [
        {
            path:"/",
            link:"Home"
        },
        
        {
            path:"/blogs",
            link:"Blogs"
        },
        {
            path:"/about",
            link:"About"
        },
        {
            path:"/services",
            link:"Services"
        },
        {
            path:"/contact",
            link:"Contact"
        },
    ]
  return (
    <header className='bg-black px-4 py-3 relative'>
        <nav className="max-w-5xl flex justify-between items-center mx-auto ">
            <a href="/" className="font-bold text-2xl text-white">
                Design<span className="text-orange-400">DK</span></a>
                <ul className="md:flex hidden list-none  gap-6">
                    {
                        links.map(link => (
                            <li  className="text-white font-bold text-xl">
                                <Link to={link.path} className={`${location.pathname === link.path?'text-orange-400 underline':''}`}>{link.link}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="text-white lg:flex gap-4 items-center hidden">
                    <a href="/" className="hover:text-orange-400">
                        <FaFacebook />
                    </a>
                    <a href="/" className="hover:text-orange-400">
                        <FaInstagram />
                    </a>
                    <a href="/" className="hover:text-orange-400">
                        <FaTwitter />
                    </a>
                    <a href="/" className="hover:text-orange-400">
                        <FaLinkedin />
                    </a>
                    <button className="bg-orange-500 px-8 hover:text-orange-500 hover:bg-white py-2 rounded">Login</button>
                </div>
                <div className="md:hidden text-white cursor-pointer ">
                        <button>
                           {
                            open?<FaX onClick = {() => setOpen(!open)}/>:<FaBars onClick = {() => setOpen(!open)} />
                           }
                            </button>  

                </div>
                 
                 <div className="md:hidden absolute top-[55px] right-0 bg-black">
                {
                    open && <><ul className="mb-2 text-white flex flex-col gap-4 justify-center items-center list-none ">
                    {links.map(link => <li onClick={()=>setOpen(!open)} key={link.link} className='hover:bg-gray-900 hover:text-black inline-block w-[100%] p-4'>
                           <Link to={link.path} className={`${location.pathname === link.path ? 'text-orange-500 underline':''}`}>{link.link}</Link>
                    </li>)}
                </ul>
                <div className="flex p-2 gap-4 text-white items-center">
                <a href="/" className="hover:text-orange-400">
                        <FaFacebook />
                    </a>
                    <a href="/" className="hover:text-orange-400">
                        <FaInstagram />
                    </a>
                    <a href="/" className="hover:text-orange-400">
                        <FaTwitter />
                    </a>
                    <a href="/" className="hover:text-orange-400">
                        <FaLinkedin />
                    </a>
                    <button className="bg-orange-500 px-8 hover:text-orange-500 hover:bg-white py-2 rounded">Login</button>
                </div>
                </>
                }
                
                </div>
        </nav>
        
    </header>
  )
}

export default Navbar