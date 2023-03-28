import React from 'react'

export default function CTA() {
    return (
        <div className='container mx-auto flex flex-col items-center justify-center py-20 gap-5'>
            <p className='text-5xl font-normal text-center text-gray-900'>Get a free trial lesson today</p>
            <p className='text-lg font-normal text-center text-gray-900 '>Start fulfilling your language dreams with our school</p>

            <div className="flex gap-10 items-center mt-6">
                <input type="text" className='px-5 py-5 outline-none bg-indigo-50 w-96 rounded-full ' placeholder='Enter your email' />
                <button className='bg-indigo-600 px-8 py-5  rounded-full border-none'>Send</button>
            </div>
        </div>
    )
}
