import React from 'react'
import play from '/assets/play.svg'
import send from '/assets/send.svg'
import paper from '/assets/paper.svg'
import Image from 'next/image'

export default function Value() {
  return (
    <div className='container mx-auto py-20'>
        <p className='text-2xl font-semibold text-gray-500 text-center'>WHY CHOOSE US</p>
        <p className='text-5xl font-semibold text-gray-900 text-center mt-3'>Our values </p>
        <div className="grid grid-cols-3 gap-16 py-20">

            <div className="flex flex-col gap-5 items-center">
                <Image src={play} alt='vl' />
                <p className='text-2xl font-medium'>Speaking clubs</p>
                <p className='text-lg font-light text-gray-600 text-center'>In our school you will practice <br /> your speaking skills and just get <br /> a lot of positive emotions!</p>
            </div>

            <div className="flex flex-col gap-5 items-center">
                <Image src={send} alt='vl'/>
                <p className='text-2xl font-medium'>Quality control</p>
                <p className='text-lg font-light text-gray-600 text-center'>A huge work has been done with <br /> the teachers and their work has <br /> been monitored thoroughly. </p>
            </div>

            <div className="flex flex-col gap-5 items-center">
                <Image src={paper} alt='vl'/>
                <p className='text-2xl font-medium'>Progress analysis</p>
                <p className='text-lg font-light text-gray-600 text-center'>The CEF of Reference has been used <br /> at our school. It allows to control our <br /> students’ success in studying.</p>
            </div>
        </div>
    </div>
  )
}
