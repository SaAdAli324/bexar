import React from 'react'
import * as Falcons from 'react-icons/fa'
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
const WhyChooseUsSection = () => {
  return (
    <>
      <section className=' font-bold'>
              <div className=' mx-auto px-35 max-md:px-4  grid grid-cols-2 flex-wrap-reverse max-2xl:grid-cols-1 py-8'>
                <div className='space-y-7 py-25 px-50 max-lg:px-0'>
                  <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
                  <p className='text-gray-500 text-2xl'>Why Choose Us</p>
                  <h2 className='text-4xl'>WHY THEY CHOOSE BEXAR</h2>
                  <p className='text-gray-500 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat in possimus consequuntur adipisci provident? At!</p>
                  <div className='flex space-x-4 max-sm:flex-col max-sm:items-start  max-md:justify-start'>
                    <div className='water-wave flex justify-center items-center'>
                      <div className='water-wave2 flex justify-center items-center'>
                        <Falcons.FaSnowflake className='text-5xl  primary-color' />
                      </div>
                    </div>
                    <div className='flex flex-col max-sm:items-start justify-center space-y-2'>
      
                      <h2 className='text-lg'>CREATIVE DESIGN</h2>
                      <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore </p>
      
                    </div>
                  </div>
                  <div className='flex space-x-4  max-sm:flex-col max-md:justify-start '>
                    <div className='water-wave flex justify-center items-center'>
                      <div className='water-wave2 flex justify-center items-center'>
                        <Falcons.FaCode className='text-5xl  primary-color' />
                      </div>
                    </div>
                    <div className='flex flex-col justify-center space-y-2'>
      
                      <h2 className='text-lg'>CREATIVE DESIGN</h2>
                      <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque inventore </p>
      
                    </div>
                  </div>
                </div>
                <div className='bg-cover bg-no-repeat  bg-[url("/backgroundImages/feature-bg.png")]  max-2xl:justify-center flex justify-end items-center'>
                  <img src="/images/feature.jpg" alt="" />
                </div>
              </div>
            </section>
      
    </>
  )
}

export default WhyChooseUsSection
