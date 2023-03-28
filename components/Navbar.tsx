import Image from 'next/image'
import React from 'react'
import logo from '/assets/Logo.svg'

export default function Navbar() {
  return (
    <div className='container mx-auto'>
        <div className="flex justify-between items-center">
            <Image src={logo} alt='logo'/>
            <div className="flex items-center gap-10">
                <p>Courses</p>
                <p>About Us</p>
                <p>Teacher</p>
                <p>Pricing</p>
                <p>Careers</p>
                <p>Blogs</p>
            </div>
            <button className=' bg-white text-indigo-600 border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full py-3 px-8'>Get Started</button>
        </div>
    </div>
  )
}
