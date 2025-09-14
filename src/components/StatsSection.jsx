import React from 'react'

import * as Falcons from 'react-icons/fa'
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import Counter from './Counter';

const StatsSection = () => {
  return (
    <>
       <section className=' text-white flex justify-center max-sm:block'>
             <div className=' px-2 bg-[#252d39] py-12 mx-auto gap-52 max-lg:gap-15 grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1'>
               <div className='flex justify-center items-center max-md:justify-start max-md:px-15'>
                 <IoIcons.IoMdClipboard className='text-6xl  primary-color' />
                 <ul className=''>
                   <li className='text-4xl font-bold'><Counter target={50} />+</li>
                   <li>Project Done</li>
                 </ul>
               </div>
               <div className='flex justify-center items-center max-md:justify-start max-md:px-15'>
                 <Falcons.FaCalendarAlt className='text-6xl  primary-color' />
                 <ul className=''>
                   <li className='text-4xl font-bold'><Counter target={25} />+</li>
                   <li>Years Experience</li>
                 </ul>
               </div>
               <div className='flex justify-center items-center max-md:justify-start max-md:px-15'>
                 <IoIcons.IoMdTrophy className='text-6xl  primary-color' />
                 <ul className=''>
                   <li className='text-4xl font-bold'><Counter target={250} />+</li>
                   <li>Award win</li>
                 </ul>
               </div>
               <div className='flex justify-center items-center max-md:justify-start max-md:px-15'>
                 <Falcons.FaRegSmile className='text-5xl  primary-color' />
                 <ul className=''>
                   <li className='text-4xl font-bold'><Counter target={500} />+</li>
                   <li>Happy customers</li>
                 </ul>
               </div>
             </div>
           </section> 
    </>
  )
}

export default StatsSection
