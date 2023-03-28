import React from 'react'
import { Disclosure } from '@headlessui/react'
import { BsFillPlusCircleFill } from 'react-icons/bs';

export default function MoreInfoModal() {
  return (
    <div className="container mx-auto py-20">
        <p className='text-xl font-semibold text-gray-500 uppercase my-3'>
            more info
            </p>
            <p className='text-5xl font-medium text-gray-900 capitalize'>
            Common questions
            </p>
      <div className="grid grid-cols-2 gap-10 mt-11">
        <Disclosure>
          {({ open }) => (
            
            <div className="group">
              <Disclosure.Button className="flex flex-col group-hover:bg-indigo-600 group-focus:bg-indigo-600 w-full justify-between rounded-[40px] border border-gray-300 bg-purple-100 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">

                <div className="flex justify-between items-center w-full">
                <span className='group-hover:text-white'>How the first lesson with teacher will be ?</span>
                <BsFillPlusCircleFill
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }  text-indigo-600 text-2xl group-hover:text-purple-100 group-focus:text-purple-100`}
                />
                </div>
                 <Disclosure.Panel className="8 pt-4 pb-2 text-sm text-gray-500 group-hover:text-white group-focus:text-white">
              By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.
              </Disclosure.Panel>
              </Disclosure.Button>
             
              </div>
            
          )}
        </Disclosure>
         
        <Disclosure>
          {({ open }) => (
            
            <div className="group">
              <Disclosure.Button className="flex flex-col group-hover:bg-indigo-600 group-focus:bg-indigo-600 w-full justify-between rounded-[40px] border border-gray-300 bg-purple-100 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">

                <div className="flex justify-between items-center w-full">
                <span className='group-hover:text-white'>How the first lesson with teacher will be ?</span>
                <BsFillPlusCircleFill
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }  text-indigo-600 text-2xl group-hover:text-purple-100 group-focus:text-purple-100`}
                />
                </div>
                 <Disclosure.Panel className="8 pt-4 pb-2 text-sm text-gray-500 group-hover:text-white group-focus:text-white">
              By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.
              </Disclosure.Panel>
              </Disclosure.Button>
             
              </div>
            
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            
            <div className="group">
              <Disclosure.Button className="flex flex-col group-hover:bg-indigo-600 group-focus:bg-indigo-600 w-full justify-between rounded-[40px] border border-gray-300 bg-purple-100 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">

                <div className="flex justify-between items-center w-full">
                <span className='group-hover:text-white'>How the first lesson with teacher will be ?</span>
                <BsFillPlusCircleFill
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }  text-indigo-600 text-2xl group-hover:text-purple-100 group-focus:text-purple-100`}
                />
                </div>
                 <Disclosure.Panel className="8 pt-4 pb-2 text-sm text-gray-500 group-hover:text-white group-focus:text-white">
              By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.
              </Disclosure.Panel>
              </Disclosure.Button>
             
              </div>
            
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            
            <div className="group">
              <Disclosure.Button className="flex flex-col group-hover:bg-indigo-600 group-focus:bg-indigo-600 w-full justify-between rounded-[40px] border border-gray-300 bg-purple-100 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">

                <div className="flex justify-between items-center w-full">
                <span className='group-hover:text-white'>How the first lesson with teacher will be ?</span>
                <BsFillPlusCircleFill
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }  text-indigo-600 text-2xl group-hover:text-purple-100 group-focus:text-purple-100`}
                />
                </div>
                 <Disclosure.Panel className="8 pt-4 pb-2 text-sm text-gray-500 group-hover:text-white group-focus:text-white">
              By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.
              </Disclosure.Panel>
              </Disclosure.Button>
             
              </div>
            
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            
            <div className="group">
              <Disclosure.Button className="flex flex-col group-hover:bg-indigo-600 group-focus:bg-indigo-600 w-full justify-between rounded-[40px] border border-gray-300 bg-purple-100 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">

                <div className="flex justify-between items-center w-full">
                <span className='group-hover:text-white'>How the first lesson with teacher will be ?</span>
                <BsFillPlusCircleFill
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }  text-indigo-600 text-2xl group-hover:text-purple-100 group-focus:text-purple-100`}
                />
                </div>
                 <Disclosure.Panel className="8 pt-4 pb-2 text-sm text-gray-500 group-hover:text-white group-focus:text-white">
              By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.
              </Disclosure.Panel>
              </Disclosure.Button>
             
              </div>
            
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            
            <div className="group">
              <Disclosure.Button className="flex flex-col group-hover:bg-indigo-600 group-focus:bg-indigo-600 w-full justify-between rounded-[40px] border border-gray-300 bg-purple-100 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">

                <div className="flex justify-between items-center w-full">
                <span className='group-hover:text-white'>How the first lesson with teacher will be ?</span>
                <BsFillPlusCircleFill
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  }  text-indigo-600 text-2xl group-hover:text-purple-100 group-focus:text-purple-100`}
                />
                </div>
                 <Disclosure.Panel className="8 pt-4 pb-2 text-sm text-gray-500 group-hover:text-white group-focus:text-white">
              By the end of the trial lesson, you will be able to determine for yourself whether this kind of online lesson is right for you or not. In our experience, most students appreciate the benefits of online education and decide to study online.
              </Disclosure.Panel>
              </Disclosure.Button>
             
              </div>
            
          )}
        </Disclosure>
      </div>
    </div>
  )
}
