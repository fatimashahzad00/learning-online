import Image from 'next/image'
import React from 'react'
import student from '/assets/student.svg'
import uk from '/assets/uk.svg'

export default function Student() {
  return (
    <div className='container mx-auto'>
        <p className='text-xl font-semibold text-gray-500 uppercase'>TOP STUDIYING</p>
        <p className='text-5xl font-medium text-gray-900 capitalize'>Our students say</p>
        <div className="flex items-center justify-between mt-10">
            <Image  src={student} alt='student'/>
            <div className="flex flex-col gap-5 items-start">
                <p className='text-3xl font-semibold text-gray-900'>Martin Watson</p>
                <div className="flex items-center gap-2">
                    <Image src={uk} alt='uk'/>
                    <p className='text-gray-500'>B2 course student</p>

                </div>
                <p className='text-2xl font-normal text-gray-900'>There is no way I could have made the same <br /> progress learning Spanish without using Lingua. <br /> The best part is now learning Spanish has <br /> become one of my biggest hobbies.</p>
            </div>
        </div>
    </div>
  )
}
