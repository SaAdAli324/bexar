import React from 'react'
import * as Falcons from 'react-icons/fa'
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
const ServiceProvideSection = () => {
  return (
    <>
      <section className='bg-gray-white'>
     
             <div className='flex  flex-col items-center font-bold bg-color pt-38 pb-68 space-y-8'>
               <span className='primary-color flex space-x-1'><hr className='border-3 rounded w-6' /> <hr className='border-3 rounded w-4' /> <hr className='border-3 rounded w-2' /></span>
               <p className='text-2xl text-gray-500'>Best Service</p>
               <h2 className='text-4xl text-white uppercase'>service we provide</h2>
             </div>
     
             <div className=' py-35'>
               <div className='container gap-6 -mt-90 mx-auto  px-25 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-4'>
     
                 <div className=' shadow-2xl bg-white'>
                   <div className='relative'>
                     <img className='w-full' src="/images/service-1.jpg" alt="" />
                     <div className='absolute bottom-7 left-4 primarybg-color rounded-full w-15 h-15 flex justify-center items-center text-3xl text-white'><Falcons.FaChartBar /></div>
     
                   </div>
                   <div className='space-y-2 py-4 px-4'>
                     <h2 className='uppercase font-semibold text-lg'>market analysis</h2>
                     <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia tempora cum reprehenderit ratione dolore?</p>
                     <a href="#" className='uppercase py-4 font-bold flex items-center group text-sm '>read more &nbsp;<Falcons.FaArrowRight className='group-hover:text-lg' /></a>
                   </div>
                 </div>
     
     
                 <div className=' shadow-2xl bg-white'>
                   <div className='relative'>
                     <img className='w-full' src="/images/service-2.jpg" alt="" />
                     <div className='absolute bottom-7 left-4 primarybg-color rounded-full w-15 h-15 flex justify-center items-center text-3xl text-white'><Falcons.FaHandshake /></div>
     
                   </div>
                   <div className='space-y-2 py-4 px-4'>
                     <h2 className='uppercase font-semibold text-lg'>business consulting</h2>
                     <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia tempora cum reprehenderit ratione dolore?</p>
                     <a href="#" className='uppercase py-4 font-bold flex items-center group text-sm '>read more &nbsp;<Falcons.FaArrowRight className='group-hover:text-lg' /></a>
                   </div>
                 </div>
     
     
     
                 <div className=' shadow-2xl bg-white'>
                   <div className='relative'>
                     <img className='w-full' src="/images/service-3.jpg" alt="" />
                     <div className='absolute bottom-7 left-4 primarybg-color rounded-full w-15 h-15 flex justify-center items-center text-3xl text-white'><MdIcons.MdBusiness /></div>
     
                   </div>
                   <div className='space-y-2 py-4 px-4'>
                     <h2 className='uppercase font-semibold text-lg'>invetment planning</h2>
                     <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia tempora cum reprehenderit ratione dolore?</p>
                     <a href="#" className='uppercase py-4 font-bold flex items-center group text-sm '>read more &nbsp;<Falcons.FaArrowRight className='group-hover:text-lg' /></a>
                   </div>
                 </div>
     
     
               </div>
             </div>
           </section> 
    </>
  )
}

export default ServiceProvideSection
