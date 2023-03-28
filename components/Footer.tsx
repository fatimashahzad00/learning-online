import Image from 'next/image'
import React from 'react'
import logo from '../assets/footer.svg'
import { BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className='container mx-auto my-10'>
            <div className="bg-indigo-50 grid grid-cols-5 gap-10 rounded-3xl px-10 py-10 items-start">
                <div className="space-y-5">
                    <Image src={logo} alt='logo' />
                    <p className='text-sm font-normal'>20 Osgood Rd, Milford, NH 03055, USA
                        +1283871239190213021</p>
                </div>
                <div className="space-y-5">
                    <h5 className='text-base font-semibold'>Company</h5>
                    <h5 className='text-sm'>Careers</h5>
                    <h5 className='text-sm'>Teachers</h5>
                    <h5 className='text-sm'>Support</h5>
                    <h5 className='text-sm'>Contact</h5>
                </div>

                <div className="space-y-5">
                    <h5 className='text-base font-semibold'>Product</h5>
                    <h5 className='text-sm'>Courses</h5>
                    <h5 className='text-sm'>Pricing</h5>
                    <h5 className='text-sm'>Blogs</h5>
                </div>

                <div className="space-y-5">
                    <h5 className='text-base font-semibold'>Legal</h5>
                    <h5 className='text-sm'>Terms & Conditions</h5>
                    <h5 className='text-sm'>Privacy Policy</h5>
                </div>

                <div className="flex items-center gap-5">
                    <BsFacebook className='text-3xl text-gray-500' />
                    <BsTwitter className='text-3xl text-gray-500' />
                    <BsInstagram className='text-3xl text-gray-500'/>
                </div>
            </div>
        </div>
    )
}
