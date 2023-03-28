import Image from "next/image";
import React from "react";
import t1 from '/assets/t1.svg'
import t2 from '/assets/t2.svg'
import t3 from '/assets/t3.svg'
import italy from '/assets/italy.svg'
import spanish from '/assets/spanish.svg'
import uk from '/assets/uk.svg'

export default function Teachers() {
    return (
        <div className='container mx-auto py-20'>
            <p className="text-xl font-semibold text-gray-500 uppercase">key persons</p>
            <p className="text-5xl font-medium text-gray-900 mt-3">Meet our teachers</p>
            <div className="grid grid-cols-3 gap-16 py-20">

                <div className="flex flex-col gap-5 ">
                    <Image src={t1} alt="t1" />
                    <p className='text-2xl font-medium'>Christian Howard</p>
                    <div className="flex items-center gap-2">
                        <Image src={italy} alt="italy" />
                        <p className=' text-gray-600 '>Italian teacher</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 ">
                    <Image src={t2} alt="t1" />
                    <p className='text-2xl font-medium'>Sandra Wilson</p>
                    <div className="flex items-center gap-2">
                        <Image src={spanish} alt="italy" />
                        <p className=' text-gray-600 '>Spanish teacher</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 ">
                    <Image src={t3} alt="t1" />
                    <p className='text-2xl font-medium'>Jimmy Cooper</p>
                    <div className="flex items-center gap-2">
                        <Image src={uk} alt="italy" />
                        <p className=' text-gray-600 '>English teacher</p>
                    </div>
                </div>


            </div>
        </div>
    )
}