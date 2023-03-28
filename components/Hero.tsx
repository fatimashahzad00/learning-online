import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'
import poster from '/assets/Image.png'

export default function Hero() {
    return (
        <div className='container mx-auto my-10'>
            <div className='bg-[#fff5f1] px-16 py-10 rounded-3xl'>
                <Navbar />
                <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-10">
                        <p className='text-6xl font-medium'>A <span className='text-indigo-600'>unique</span> approach <br /> to learning foreign <br /> languages online</p>
                        <p className='text-lg text-gray-500 '>Learn at your own pace, with lifetime <br /> access on mobile and desktop</p>

                        <button className='bg-indigo-600 text-white rounded-full w-44 h-16 border-none '>Get Started</button>
                    </div>
                    <Image src={poster} alt='poster'/>
                </div>
            </div>
        </div>
    )
}
