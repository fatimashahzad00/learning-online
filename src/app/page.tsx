'use client'
import React from 'react'
import Hero from '../../components/Hero'
import Value from '../../components/Value'
import Teachers from '../../components/Teachers'
import Student from '../../components/Student'
import MoreInfoModal from '../../components/MoreInfoModal'
import CTA from '../../components/cta'
import Footer from '../../components/Footer'


export default function Home() {
  return (
    <>
    {/* <BsFillPlusCircleFill /> */}
    <Hero />
    <Value />
    <Teachers />
    <Student />
    <MoreInfoModal />
    <CTA />
    <Footer />
    </>
  )
}
